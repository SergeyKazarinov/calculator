import { createSlice } from '@reduxjs/toolkit';

const calcSlice = createSlice({
  name: 'calcSlice',
  initialState: {
    display: '0',
  },
  reducers: {
    clearDisplay(state) {
      state.display = '0';
    },
    setTheFirstNumber(state, action) {
      if (state.display === '0') {
        if (action.payload === ',') {
          state.display += action.payload;
        } else {
          state.display = action.payload;
        }
      } else if (state.display.length < 9 && !(state.display.includes(',') && action.payload === ',')) {
        state.display += action.payload;
      }
      console.log(state.display);
    },
  },
});

export default calcSlice.reducer;
export const calcActions = calcSlice.actions;
