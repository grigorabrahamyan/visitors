import { Grid, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/slices/visitorsLIst.slice";
import { validation } from "../../helpers/validations";
import {
  setInputform,
  setNotification,
  setRestore,
} from "../../store/slices/visitorForm.slice";
import { v4 as uuidv4 } from "uuid";
import { errors } from "../constants/errors";

const ButtonGroups = () => {
  const dispatch = useDispatch();
  const { visitor, email, department, isChecked } =
    useSelector((state) => state.visitorForm) ?? {};

  const handleSubmitVisitor = () => {
    if (!isChecked) {
      return dispatch(setNotification(errors.isChecked));
    }
    if (!validation.visitor(visitor.value)) {
      dispatch(
        setInputform({
          value: {
            value: email.value,
            error: true,
          },
          name: "visitor",
        })
      );
      return dispatch(setNotification(errors.visitor));
    }
    if (!validation.email(email.value)) {
      dispatch(
        setInputform({
          value: {
            value: email.value,
            error: true,
          },
          name: "email",
        })
      );
      return dispatch(setNotification(errors.email));
    }
    if (!validation.visitor(department.value)) {
      dispatch(
        setInputform({
          value: {
            value: email.value,
            error: true,
          },
          name: "department",
        })
      );
      return dispatch(setNotification(errors.department));
    }

    dispatch(
      setData({
        id: uuidv4(),
        visitor: visitor.value,
        email: email.value,
        department: department.value,
      })
    );
    dispatch(setRestore());
    dispatch(
      setNotification({
        msg: "Success: Visitor has been added",
        type: "success",
        isShow: true,
      })
    );
  };

  const handleRestoreForm = () => {
    dispatch(setRestore());
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6} lg={5}>
        <Button variant="outlined" fullWidth onClick={handleRestoreForm}>
          <Typography variant="subtitle2">RESET FROM</Typography>
        </Button>
      </Grid>
      <Grid item xs={6} lg={7}>
        <Button variant="contained" fullWidth onClick={handleSubmitVisitor}>
          <Typography variant="subtitle2">ADD NEW VISITOR</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default ButtonGroups;
