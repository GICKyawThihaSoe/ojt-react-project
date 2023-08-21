import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: "countshow",
  initialState,
  reducers: {
    addCount: (state) => {
      state.count += 1;
    },
    removeCount:(state)=>{
        state.count -= 1;
    }
  },
});

export const {addCount,removeCount} = countSlice.actions;
export default countSlice.reducer;