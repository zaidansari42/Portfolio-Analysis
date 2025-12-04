import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CustomizedChart from "../../components/ui/CustomizedChart";

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

function createData(name, ytd, d1, w1, m1, m3, m6, y1, y3, si, dd, maxdd) {
  return { name, ytd, d1, w1, m1, m3, m6, y1, y3, si, dd, maxdd };
}

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
    <>
      <Box padding={4} backgroundColor="white">
        <Box>
          <Typography variant="h6" style={{ marginBottom: "10px" }}>
            Trailing Returns
          </Typography>
          <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>NAME</StyledTableCell>
                  <StyledTableCell align="right">YTD</StyledTableCell>
                  <StyledTableCell align="right">1D</StyledTableCell>
                  <StyledTableCell align="right">1W</StyledTableCell>
                  <StyledTableCell align="right">1M</StyledTableCell>
                  <StyledTableCell align="right">3M</StyledTableCell>
                  <StyledTableCell align="right">6M</StyledTableCell>
                  <StyledTableCell align="right">1Y</StyledTableCell>
                  <StyledTableCell align="right">3Y</StyledTableCell>
                  <StyledTableCell align="right">SI</StyledTableCell>
                  <StyledTableCell align="right">DD</StyledTableCell>
                  <StyledTableCell align="right">MAXDD</StyledTableCell>
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
          <Typography
            variant="caption"
            gutterBottom
            sx={{ display: "block", color: "grey" }}
          >
            Note: Returns above 1 year are annualised.
          </Typography>
        </Box>
        <Box>
          <CustomizedChart />
        </Box>
      </Box>
    </>
  );
};

export default Portfolio;
