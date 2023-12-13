//import font
import { bagel, dancing } from "@/fonts/font";
//import style
import { StyledButton } from "@/muiStyles/StyleButton";
import { StyledInput } from "@/muiStyles/StyleInput";
//import component from mui
import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

interface InputProps {
  title: String;
  date: String;
  handleChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  //   deleteAll: () => void;
  addTask: () => void;
  filter: String;
  //   handleFilterChange: (filter: String) => void;
}

function InputTodoSection(props: InputProps) {
  return (
    <>
      <Card>
        <CardContent sx={{ marginX: "10px" }}>
          <Typography
            className={dancing.className}
            variant="h3"
            sx={{ textAlign: "center" }}
          >
            Todo App
          </Typography>
          <Grid
            container
            spacing={1}
            sx={{
              marginTop: "40px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item sm={12} md={5} mx="5px">
              <StyledInput
                fullWidth
                label="Add todo"
                variant="outlined"
                value={props.title}
                onChange={props.handleChangeTitle}
              />
            </Grid>
            <Grid item sm={12} md={5} mx="5px">
              <StyledInput
                fullWidth
                label="mm/dd/yyyy"
                variant="outlined"
                value={props.date}
                onChange={props.handleChangeDate}
              />
            </Grid>
            <Grid item xs={6} md={1} mx="5px">
              <StyledButton
                className={bagel.className}
                onClick={props.addTask}
                variant="contained"
              >
                Add
              </StyledButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
export default InputTodoSection;
