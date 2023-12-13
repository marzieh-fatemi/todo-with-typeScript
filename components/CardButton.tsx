import { bagel } from "@/fonts/font";
import { StyledButton } from "@/muiStyles/StyleButton";
import { Card, CardContent, Grid } from "@mui/material";

interface CardButtonProps {
  deleteAll: () => void;
  handleFilterChange: (filter: String) => void;
}

function CardButtonComponent(props: CardButtonProps) {
  return (
    <>
      <Card sx={{ marginTop: "30px" }}>
        <CardContent sx={{ marginX: "10px" }}>
          <Grid
            container
            spacing={1}
            sx={{
              marginTop: "25px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item sm={6} md={3}>
              <StyledButton
                className={bagel.className}
                sx={{ marginRight: "5px" }}
                variant="contained"
                onClick={() => props.handleFilterChange("All")}
              >
                All
              </StyledButton>
            </Grid>
            <Grid item sm={6} md={3}>
              <StyledButton
                className={bagel.className}
                sx={{ marginRight: "5px" }}
                variant="contained"
                onClick={() => props.handleFilterChange("pending")}
              >
                Pending
              </StyledButton>
            </Grid>
            <Grid item sm={6} md={3}>
              <StyledButton
                className={bagel.className}
                sx={{ marginRight: "5px" }}
                variant="contained"
                onClick={() => props.handleFilterChange("Compiled")}
              >
                Compiled
              </StyledButton>
            </Grid>
            <Grid item sm={6} md={3}>
              <StyledButton
                className={bagel.className}
                onClick={props.deleteAll}
                variant="contained"
              >
                Delete All
              </StyledButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default CardButtonComponent;
