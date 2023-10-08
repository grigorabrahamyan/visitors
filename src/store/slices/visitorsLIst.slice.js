import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../helpers/localStorage";

const initialState = {
  dataMap: getLocalStorageItem("data") || {},
  page: 0,
  rowsPerPage: 5,
  selected: [],
};

const visitorsListSlice = createSlice({
  name: "visitorsList",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.dataMap[payload.id] = payload;
      setLocalStorageItem(state.dataMap, "data");
    },
    removeData: (state, { payload }) => {
      payload.forEach((element) => {
        if (state.dataMap[element]) {
          delete state.dataMap[element];
        }
      });
      setLocalStorageItem(state.dataMap, "data");
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setRowPerPage: (state, { payload }) => {
      state.rowsPerPage = payload;
      state.page = 0;
    },
  },
});

export const { setData, setPage, setRowPerPage, removeData } =
  visitorsListSlice.actions;

export default visitorsListSlice.reducer;
