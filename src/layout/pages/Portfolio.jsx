import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

import CustomizedChart from "../../components/ui/CustomizedChart";
import { createData, HEADERS } from "../../utils/chartUtils";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },

  "&:nth-of-type(10)": {
    borderRight: "3px solid #aeaeae",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "& th:nth-of-type(10), & td:nth-of-type(10)": {
    borderRight: "3px solid #aeaeae",
  },
}));

const rows = [
  createData(
    "Quant Active Fund",
    "-1.7%",
    "0.1%",
    "2.9%",
    "7.6%",
    "2.2%",
    "10.1%",
    "43.5%",
    "23.9%",
    "22.5%",
    "-2.8%",
    "-40.3%"
  ),
  createData(
    "NIFTY50",
    "3.1%",
    "0.1%",
    "1.1%",
    "1.4%",
    "4.4%",
    "16.2%",
    "26.2%",
    "16.0%",
    "14.5%",
    "-1.5%",
    "-38.4%"
  ),
];

const Portfolio = () => {
  return (
    <Box p={4} bgcolor="white">
      <Box mb={3}>
        <Typography variant="h6" mb={1}>
          Trailing Returns
        </Typography>

        <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
          <Table sx={{ minWidth: 700 }} aria-label="trailing returns table">
            <TableHead>
              <TableRow>
                {HEADERS.map((label) => (
                  <StyledTableCell
                    key={label}
                    align={label === "NAME" ? "left" : "right"}
                  >
                    {label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.ytd}</StyledTableCell>
                  <StyledTableCell align="right">{row.d1}</StyledTableCell>
                  <StyledTableCell align="right">{row.w1}</StyledTableCell>
                  <StyledTableCell align="right">{row.m1}</StyledTableCell>
                  <StyledTableCell align="right">{row.m3}</StyledTableCell>
                  <StyledTableCell align="right">{row.m6}</StyledTableCell>
                  <StyledTableCell align="right">{row.y1}</StyledTableCell>
                  <StyledTableCell align="right">{row.y3}</StyledTableCell>
                  <StyledTableCell align="right">{row.si}</StyledTableCell>
                  <StyledTableCell align="right">{row.dd}</StyledTableCell>
                  <StyledTableCell align="right">{row.maxdd}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="caption" display="block" color="grey">
          Note: Returns above 1 year are annualised.
        </Typography>
      </Box>

      <Box>
        <CustomizedChart />
      </Box>
    </Box>
  );
};

export default Portfolio;
