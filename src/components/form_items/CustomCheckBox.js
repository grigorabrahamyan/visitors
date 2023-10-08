import { FormControlLabel, Checkbox } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setIsChecked } from "../../store/slices/visitorForm.slice";

const CustomCheckBox = () => {
  const dispatch = useDispatch();
  const isChecked = useSelector((state) => state.visitorForm.isChecked);

  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={(e) => dispatch(setIsChecked(e.target.checked))}
          checked={isChecked}
        />
      }
      label="I agree to be added to the table"
    />
  );
};

export default CustomCheckBox;
