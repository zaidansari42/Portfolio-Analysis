// All the logic funtion utils
import dayjs from "dayjs";

// "DD-MM-YYYY" → "YYYY-MM-DD"
export const formatNavData = (navData) => {
  return navData.map(([date, value]) => {
    const [dd, mm, yyyy] = date.split("-");
    return [`${yyyy}-${mm}-${dd}`, Number(value.toFixed(2))];
  });
};

// Draw down calculation
export const calculateDrawdown = (formattedData) => {
  let peak = 0;

  return formattedData.map(([date, value]) => {
    peak = Math.max(peak, value);
    return [date, Number((value - peak).toFixed(2))];
  });
};

// Start date and End date validation message
export const validateStartDate = (start, end) => {
  if (start.isAfter(end)) {
    return "Start date cannot be after end date";
  }
  return "";
};

export const validateEndDate = (start, end) => {
  if (end.isBefore(start)) {
    return "End date cannot be before start date";
  }
  return "";
};

export const ORIGINAL_DATES = {
  start: dayjs().subtract(5, "year"),
  end: dayjs(),
};

// Trailling table heading
export const HEADERS = [
  "NAME",
  "YTD",
  "1D",
  "1W",
  "1M",
  "3M",
  "6M",
  "1Y",
  "3Y",
  "SI",
  "DD",
  "MAXDD",
];

export const createData = (
  name,
  ytd,
  d1,
  w1,
  m1,
  m3,
  m6,
  y1,
  y3,
  si,
  dd,
  maxdd
) => {
  return { name, ytd, d1, w1, m1, m3, m6, y1, y3, si, dd, maxdd };
};
