//font
import { dancing } from "@/fonts/font";
//style mui
import { StyledButton } from "@/muiStyles/StyleButton";
import { StyledInput } from "@/muiStyles/StyleInput";
//component mui
import { Box, Card, Grid, Typography } from "@mui/material";
//router
import { useRouter } from "next/router";
//react hook form
import { useForm, SubmitHandler } from "react-hook-form";

function LoginComponent() {
  const router = useRouter();

  //username & password
  const adminDetails = {
    email: "marzie409@gmail.com",
    password: "12345",
  };

  interface IFormInput {
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  //form submit Handler
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    if (
      data.email === adminDetails.email &&
      data.password === adminDetails.password
    ) {
      localStorage.setItem("user", JSON.stringify(data));
      router.push("/todo");
    } else {
      alert("useName Or Password is mistack");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={3}
          sx={{ minHeight: "100vh", backgroundColor: "#00042bcf" }}
          direction="column"
          alignItems="center"
          justifyContent="center"
          justifyItems="center"
        >
          <Typography
            className={dancing.className}
            variant="h3"
            marginBottom="20px"
            sx={{ color: "white" }}
          >
            Login Form
          </Typography>

          <Box width="40%">
            <Card sx={{ padding: "60px" }}>
              <Grid item xs={12}>
                <StyledInput
                  type="email"
                  {...register("email", { required: true })}
                  sx={{ marginBottom: "20px" }}
                  fullWidth
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <StyledInput
                  type="password"
                  {...register("password", { required: true })}
                  sx={{ marginBottom: "20px" }}
                  fullWidth
                  label="password"
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <StyledButton type="submit" variant="contained">
                  signIn
                </StyledButton>
              </Grid>
            </Card>
          </Box>
        </Grid>
      </form>
    </>
  );
}

export default LoginComponent;
