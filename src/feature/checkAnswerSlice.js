import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCheck: false,
  showError: false,
};

const checkAnswerSlice = createSlice({
  name: "check",
  initialState,
  reducers: {
    openScore: (state) => {
      state.isCheck = true;
    },
    closeScore: (state) => {
      state.isCheck = false;
    },
    openError: (state) => {
      state.showError = true;
    },
    closeError: (state) => {
      state.showError = false;
    },
  },
});

export const { openScore, closeScore, openError, closeError } =
  checkAnswerSlice.actions;
export default checkAnswerSlice.reducer;
