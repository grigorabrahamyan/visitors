import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visitor: {
    value: "",
    error: false,
  },
  email: {
    value: "",
    error: false,
  },
  department: {
    value: "",
    error: false,
  },
  isChecked: false,
  notification: {
    isShow: false,
    type: "success", //error
    msg: "",
  },
};

const visitorFormSlice = createSlice({
  name: "visitorForm",
  initialState,
  reducers: {
    setInputform: (state, { payload }) => {
      const { name, value: { value, error = false } = {} } = payload;
      state[name] = {
        value,
        error,
      };
    },
    setIsChecked: (state, { payload }) => {
      state.isChecked = payload;
    },
    setRestore: (state) => {
      state.visitor = initialState.visitor;
      state.email = initialState.email;
      state.department = initialState.department;
      state.isChecked = initialState.isChecked;
    },
    setNotification: (state, { payload }) => {
      state.notification = { ...state.notification, ...payload };
    },
  },
});

export const { setInputform, setIsChecked, setRestore, setNotification } =
  visitorFormSlice.actions;

export default visitorFormSlice.reducer;
