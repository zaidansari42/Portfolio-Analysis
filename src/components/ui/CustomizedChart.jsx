import { Box, Typography } from "@mui/material";
import ReactECharts from "echarts-for-react";
import { navData } from "../../data/navData";

const CustomizedChart = () => {
  const formattedData = navData.map(([date, value]) => {
    const [dd, mm, yyyy] = date.split("-");
    return [`${yyyy}-${mm}-${dd}`, value.toFixed(2)];
  });

  let peak = 0;
  const drawdownData = formattedData.map(([date, value]) => {
    peak = Math.max(peak, value);
    return [date, Number((value - peak).toFixed(2))];
  });

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
      min: function (value) {
        return Math.min(0, value.min - 50);
      },
      interval: 50,
      axisLabel: {
        formatter: (value) => Math.round(value / 10) * 10,
      },
    },

    dataZoom: [
      {
        type: "slider",
        startValue: "2018-05-25",
        endValue: "2024-01-24",
      },
      { type: "inside" },
    ],

    series: [
      {
        name: "Price",
        type: "line",
        showSymbol: false,
        data: formattedData,
      },

      {
        name: "Drawdown",
        type: "line",
        showSymbol: false,
        lineStyle: {
          color: "red",
          type: "line",
        },
        areaStyle: {
          opacity: 0.1,
          color: "rgba(255, 0, 0, 0.3)",
        },
        data: drawdownData,
      },
    ],

    grid: {
      height: 1000,
      top: 50,
      bottom: 50,
    },
  };

  return (
    <Box sx={{ marginTop: "30px" }}>
      <Typography variant="h6" style={{ marginBottom: "10px" }}>
        Equity Curve
      </Typography>
      <ReactECharts
        style={{ height: "500px", width: "100%" }}
        option={option}
      />
    </Box>
  );
};

export default CustomizedChart;
