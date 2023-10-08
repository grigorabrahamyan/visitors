import { Grid } from "@mui/material";

const HeaderCell = ({ cell, children }) => {
  const { isEnd, isCheckbox, label } = cell ?? {};

  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={isEnd ? "flex-end" : "flex-start"}
    >
      {isCheckbox && <Grid item>{children}</Grid>}
      <Grid item>{label}</Grid>
    </Grid>
  );
};

export default HeaderCell;
