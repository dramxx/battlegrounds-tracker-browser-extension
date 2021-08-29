import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const DUMMY_ROWS = [
  {
    hero: "Captain Hooktusk",
    standing: 4,
    date: "29. 8. 2021, 19:30:55",
  },
  {
    hero: "The Lich King",
    standing: 1,
    date: "29. 8. 2021, 19:30:55",
  },
  {
    hero: "Galakrond",
    standing: 2,
    date: "29. 8. 2021, 19:30:55",
  },
  {
    hero: "Yogg-Saron, Hope’s End",
    standing: 3,
    date: "29. 8. 2021, 19:30:55",
  },
  {
    hero: "Captain Hooktusk",
    standing: 4,
    date: "29. 8. 2021, 19:30:55",
  },
  {
    hero: "The Lich King",
    standing: 1,
    date: "29. 8. 2021, 19:30:55",
  },
  {
    hero: "Galakrond",
    standing: 2,
    date: "29. 8. 2021, 19:30:55",
  },
  {
    hero: "Yogg-Saron, Hope’s End",
    standing: 3,
    date: "29. 8. 2021, 19:30:55",
  },
  {
    hero: "Captain Hooktusk",
    standing: 4,
    date: "29. 8. 2021, 19:30:55",
  },
  {
    hero: "The Lich King",
    standing: 1,
    date: "29. 8. 2021, 19:30:55",
  },
  {
    hero: "Galakrond",
    standing: 2,
    date: "29. 8. 2021, 19:30:55",
  },
  {
    hero: "Yogg-Saron, Hope’s End",
    standing: 3,
    date: "29. 8. 2021, 19:30:55",
  },
];

export const ResultPage = () => {
  return (
    <div className="result_page">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            {DUMMY_ROWS.map((row, i) => (
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
