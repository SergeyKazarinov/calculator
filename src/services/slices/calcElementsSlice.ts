import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  calcElements: string[],
  isDisplay: boolean,
};

const calcElementsSlice = createSlice({
  name: 'calcElementsSlice',
  initialState: {
    calcElements: [],
    isDisplay: false,
  } as IInitialState,
  reducers: {
    setDisplay(state, action: PayloadAction<boolean>) {
      state.isDisplay = action.payload;
    },
    setCalcElement(state, action) {
      if (state.calcElements.includes(action.payload)) {
        return;
      } 
      state.calcElements = [...state.calcElements, action.payload];
      

    },
    removeCalcElement(state, action: PayloadAction<string>) {
      state.calcElements = state.calcElements.filter(item => item !== action.payload);
    },
    clearCalcElement(state) {
      state.calcElements = [];
    }
  }
});

export default calcElementsSlice.reducer;
export const calcElementsActions = calcElementsSlice.actions;