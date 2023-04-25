import { createSlice } from '@reduxjs/toolkit';

const calcSlice = createSlice({
  name: 'calcSlice',
  initialState: {
    display: 0,
  },
  reducers: {
    setTheFirstNumber(state) {
      state.display = 1;
    },
  },
});

export default calcSlice.reducer;
export const calcActions = calcSlice.actions;
