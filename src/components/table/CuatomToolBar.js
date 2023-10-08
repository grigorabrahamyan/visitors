import { Toolbar, Grid, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeData } from "../../store/slices/visitorsLIst.slice";

const CustomToolBar = ({ selected }) => {
  const dispatch = useDispatch();

  const handleClickRemove = () => {
    if (selected.length) {
      dispatch(removeData(Object.keys(selected)));
    }
  };

  return (
    <Toolbar>
      <Grid container spacing={3} alignItems={"center"}>
        <Grid item>
          <Typography>Selected {selected.length} items</Typography>
        </Grid>
        <Grid item>
          <Button
            disabled={!selected.length}
            variant="contained"
            onClick={handleClickRemove}
          >
            Remove
          </Button>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default CustomToolBar;
