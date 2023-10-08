import { configureStore } from "@reduxjs/toolkit";
import visitorFormReducer from "./slices/visitorForm.slice";
import visitorsListReducer from "./slices/visitorsLIst.slice";

const store = configureStore({
  reducer: {
    visitorForm: visitorFormReducer,
    visitorsList: visitorsListReducer,
  },
});

export default store;
