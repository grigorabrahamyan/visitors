import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setInputform } from "../../store/slices/visitorForm.slice";
import { validation } from "../../helpers/validations";

const CustomInput = ({ name, ...rest }) => {
  const dispatch = useDispatch();
  const { value, error } = useSelector((state) => state.visitorForm[name]);

  return (
    <TextField
      value={value}
      name={name}
      error={error}
      onChange={(e) => {
        let tmp = false;
        if (error && !validation[name](e.target.value)) {
          tmp = true;
        }
        dispatch(
          setInputform({ value: { value: e.target.value, error: tmp }, name })
        );
      }}
      {...rest}
    />
  );
};

export default CustomInput;
