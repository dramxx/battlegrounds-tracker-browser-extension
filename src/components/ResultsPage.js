import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export const ResultsPage = ({ data }) => {
  return (
    <div className="results_page page">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={`key_${i}`}>
                <TableCell component="th" scope="row">
                  {row.hero}
                </TableCell>
                <TableCell align="right">{row.standing}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
