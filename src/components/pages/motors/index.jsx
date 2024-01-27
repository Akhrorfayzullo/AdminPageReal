import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import { Button } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { InputForm } from "./inputForm";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function MotorComponent() {
  const [tableRows, setTableRows] = React.useState(rows);

  // Function to add new information
  const addInfo = (info) => {
    // Validate input data
    if (
      !info.name ||
      isNaN(info.calories) ||
      isNaN(info.fat) ||
      isNaN(info.carbs) ||
      isNaN(info.protein)
    ) {
      alert("Please provide valid input for all fields.");
      return; // Don't proceed with adding the row if data is not valid
    }

    const newRow = createData(
      info.name,
      parseFloat(info.calories),
      parseFloat(info.fat),
      parseFloat(info.carbs),
      parseFloat(info.protein)
    );

    // Update the tableRows state with the new row
    setTableRows((prevRows) => [...prevRows, newRow]);
  };

  const deleteRow = (index) => {
    // Add a confirmation dialog or logic here if needed
    const confirmed = window.confirm(
      "Are you sure you want to delete this row?"
    );
    if (confirmed) {
      setTableRows((prevRows) => prevRows.filter((_, i) => i !== index));
    }
  };

  return (
    <div style={{ paddingRight: 50, paddingLeft: 50 }}>
      {/* Pass the addInfo function to the InputForm component */}
      <h1 style={{ textAlign: "center" }}>Motor</h1>
      <InputForm addInfo={addInfo} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell align="right">Calories</StyledTableCell>
              <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="center">Buttons</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Iterate over the tableRows state to render the rows */}
            {tableRows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="center">
                  <div
                    style={{
                      border: "1px solid yellow",
                      display: "inline-flex",
                      gap: "20px",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      // onClick={() => editRow(index)}
                    >
                      EDIT
                    </Button>
                    <Button
                      // style={{ marginLeft: "30px" }}
                      variant="contained"
                      color="secondary"
                      onClick={() => deleteRow(index)}
                    >
                      DELETE
                    </Button>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
