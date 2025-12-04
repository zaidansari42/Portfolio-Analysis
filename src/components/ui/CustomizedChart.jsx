import React, { useRef, useState } from "react";
import ReactECharts from "echarts-for-react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Button, Typography } from "@mui/material";

import { navData } from "../../data/navData";

const CustomizedChart = () => {
  // States
  const [startDate, setStartDate] = useState(dayjs().subtract(5, "year"));
  const [endDate, setEndDate] = useState(dayjs());

  const [startError, setStartError] = useState("");
  const [endError, setEndError] = useState("");

  const originalDatesRef = useRef({
    start: dayjs().subtract(5, "year"),
    end: dayjs(),
  });

  const handleReset = () => {
    setStartDate(originalDatesRef.current.start);
    setEndDate(originalDatesRef.current.end);
    setStartError("");
    setEndError("");
  };

  const handleStartDateChange = (newValue) => {
    if (!newValue || !newValue.isValid()) return;

    if (newValue.isAfter(endDate)) {
      setStartError("Start date cannot be after end date");
    } else {
      setStartError("");
      setEndError("");
      setStartDate(newValue);
    }
  };

  const handleEndDateChange = (newValue) => {
    if (!newValue || !newValue.isValid()) return;

    if (newValue.isBefore(startDate)) {
      setEndError("End date cannot be before start date");
    } else {
      setEndError("");
      setStartError("");
      setEndDate(newValue);
    }
  };

  // Format NAV data
  const formattedData = navData.map(([date, value]) => {
    const [dd, mm, yyyy] = date.split("-");
    return [`${yyyy}-${mm}-${dd}`, Number(value.toFixed(2))];
  });

  // Drawdown calculation
  const drawdownData = (() => {
    let peak = 0;

    return formattedData.map(([date, value]) => {
      peak = Math.max(peak, value);
      return [date, Number((value - peak).toFixed(2))];
    });
  })();

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
