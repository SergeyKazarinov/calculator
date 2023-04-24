import { createSlice } from '@reduxjs/toolkit';


const checkboxSlice = createSlice({
  name: 'checkboxSlice',
  initialState: {
    checkbox: true,
  },
  reducers: {
    changeCheckbox(state) {
      state.checkbox = !state.checkbox;
    }
  }
});

export default checkboxSlice.reducer;
export const checkboxActions = checkboxSlice.actions; 