import { useSelector, useDispatch } from "react-redux";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { DEPARTMENT_SELECT_OPTIONS } from "../constants/constants";
import { setInputform } from "../../store/slices/visitorForm.slice";

const CustomSelect = ({ name, ...rest }) => {
  const dispatch = useDispatch();
  const { value, error } = useSelector((state) => state.visitorForm[name]);

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Department</InputLabel>
      <Select
        {...rest}
        error={error}
        value={value}
        onChange={(e) =>
          dispatch(setInputform({ value: { value: e.target.value }, name }))
        }
      >
        {DEPARTMENT_SELECT_OPTIONS.map(({ option, id }) => {
          return (
            <MenuItem key={id} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
