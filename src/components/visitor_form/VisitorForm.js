import { Grid, Typography } from "@mui/material";
import CustomInput from "../form_items/CustomInput";
import CustomSelect from "../form_items/CustomSelect";
import CustomCheckBox from "../form_items/CustomCheckBox";
import ButtonGroups from "./ButtonsGroup";

const VisitorForm = () => {
  return (
    <Grid container flexDirection={"column"} spacing={3}>
      <Grid item>
        <Typography variant="h6" component={"p"}>
          Add new visitor
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={3} flexDirection={"column"}>
          <Grid item>
            <CustomInput
              id="outlined-basic"
              label="Full name"
              variant="outlined"
              name="visitor"
              fullWidth
            />
          </Grid>
          <Grid item>
            <CustomInput
              id="outlined-basic"
              label="Email address"
              variant="outlined"
              name="email"
              required
              fullWidth
            />
          </Grid>
          <Grid item>
            <CustomSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Department"
              name="department"
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CustomCheckBox />
      </Grid>
      <Grid item>
        <ButtonGroups />
      </Grid>
    </Grid>
  );
};

export default VisitorForm;
