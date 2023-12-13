import { TextField } from "@mui/material";
import styled from "@emotion/styled";

export const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "purple",
    },
  },
  "& label.Mui-focused": {
    color: "purple",
  },
}));
