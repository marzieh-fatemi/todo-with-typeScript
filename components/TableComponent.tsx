//import font
import { bagel } from "@/fonts/font";
//import styles
import { StyledButton } from "@/muiStyles/StyleButton";
import { StyledTableCell, StyledTableRow } from "@/muiStyles/StyledTable";
//import component from mui
import {
  Card,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";

interface TableProps {
  id: String;
  task: String;
  date: String;
  Complete: boolean;
}

type UserArray = {
  task: TableProps[];
  deleteId: (id: String) => void;
  toggleHandler: (id: String) => void;
  filter: String;
};
//filter
let filtering: any[];

function TableComponent(props: UserArray) {
  if (props.filter == "All") {
    filtering = props.task;
    console.log("filtering", filtering);
  } else if (props.filter == "pending") {
    filtering = props.task.filter((item) => item.Complete == false);
  } else if (props.filter == "Compiled") {
    filtering = props.task.filter((item) => item.Complete == true);
  }
  return (
    <>
      <Card sx={{ marginTop: "70px" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell className={bagel.className} align="center">
                  Task
                </StyledTableCell>
                <StyledTableCell className={bagel.className} align="center">
                  Date
                </StyledTableCell>
                <StyledTableCell className={bagel.className} align="center">
                  Status
                </StyledTableCell>
                <StyledTableCell className={bagel.className} align="center">
                  Actions
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {filtering?.map((row, key) => (
                <StyledTableRow key={key}>
                  <StyledTableCell align="center">{row.task}</StyledTableCell>
                  <StyledTableCell align="center">{row.date}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.Complete ? "Complete" : "Pending"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <>
                      <StyledButton
                        onClick={() => props.toggleHandler(row.id)}
                        className={bagel.className}
                      >
                        {row.Complete ? "Undo" : "Do"}
                      </StyledButton>
                      <StyledButton
                        className={bagel.className}
                        onClick={() => props.deleteId(row.id)}
                        sx={{ margin: "5px" }}
                      >
                        Deleted
                      </StyledButton>
                    </>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
}

export default TableComponent;
