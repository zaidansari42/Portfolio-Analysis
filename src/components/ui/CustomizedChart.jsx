import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Button, Typography } from "@mui/material";
import {
  formatNavData,
  calculateDrawdown,
  validateStartDate,
  validateEndDate,
  ORIGINAL_DATES,
} from "../../utils/chartUtils";

import { navData } from "../../data/navData";

const CustomizedChart = () => {
  // States
  const [startDate, setStartDate] = useState(ORIGINAL_DATES.start);
  const [endDate, setEndDate] = useState(ORIGINAL_DATES.end);

  const [startError, setStartError] = useState("");
  const [endError, setEndError] = useState("");

  const handleReset = () => {
    setStartDate(ORIGINAL_DATES.start);
    setEndDate(ORIGINAL_DATES.end);
    setStartError("");
    setEndError("");
  };

  const handleStartDateChange = (newValue) => {
    if (!newValue || !newValue.isValid()) return;

    const error = validateStartDate(newValue, endDate);
    setStartError(error);

    if (!error) {
      setEndError("");
      setStartDate(newValue);
    }
  };

  const handleEndDateChange = (newValue) => {
    if (!newValue || !newValue.isValid()) return;

    const error = validateEndDate(startDate, newValue);
    setEndError(error);

    if (!error) {
      setStartError("");
      setEndDate(newValue);
    }
  };

  const formattedData = formatNavData(navData);
  const drawdownData = calculateDrawdown(formattedData);

  // Chart Options
  const option = {
    title: {
      text: "Quant Active Fund Gr",
      subtext: "(Scroll to Zoom-in-out)",
    },

    tooltip: { trigger: "axis" },

    xAxis: { type: "time", name: "NAV Date" },

    yAxis: {
      name: "NAV Value",
      type: "value",
      min: (value) => Math.min(0, value.min - 50),
      interval: 50,
      axisLabel: {
        formatter: (value) => Math.round(value / 10) * 10,
      },
    },

    dataZoom: [
      {
        type: "slider",
        startValue: startDate.format("YYYY-MM-DD"),
        endValue: endDate.format("YYYY-MM-DD"),
      },
      { type: "inside" },
    ],

    series: [
      { name: "Price", type: "line", showSymbol: false, data: formattedData },
      {
        name: "Drawdown",
        type: "line",
        showSymbol: false,
        lineStyle: { color: "red" },
        areaStyle: { opacity: 0.1, color: "rgba(255, 0, 0, 0.3)" },
        data: drawdownData,
      },
    ],

    grid: { height: 1000, top: 50, bottom: 50 },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ marginTop: "30px" }}>
        <Typography variant="h6" style={{ marginBottom: "10px" }}>
          Equity Curve
        </Typography>

        <Box>
          <Button variant="outlined" color="success" onClick={handleReset}>
            Reset
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 2,
            mr: 5,
            justifyContent: "flex-end",
          }}
        >
          <DatePicker
            label="From Date"
            value={startDate}
            onChange={handleStartDateChange}
            slotProps={{
              textField: {
                error: Boolean(startError),
                helperText: startError,
              },
            }}
          />

          <DatePicker
            label="To Date"
            value={endDate}
            onChange={handleEndDateChange}
            slotProps={{
              textField: {
                error: Boolean(endError),
                helperText: endError,
              },
            }}
          />
        </Box>

        <ReactECharts
          key={`${startDate.format("YYYY-MM-DD")}_${endDate.format(
            "YYYY-MM-DD"
          )}`}
          style={{ height: "500px", width: "100%" }}
          option={option}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default CustomizedChart;
