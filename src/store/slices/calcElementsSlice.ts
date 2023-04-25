import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  calcElements: string[],
  isDisplay: boolean,
}

interface ISetCalcElementAction {
  id: string;
  arrayId: string;
}

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
    addCalcElement(state, action) {
      if (state.calcElements.includes(action.payload)) {
        state.calcElements = state.calcElements.filter((i) => i !== action.payload);
      }
      state.calcElements = [...state.calcElements, action.payload];
    },
    setCalcElement(state, action: PayloadAction<ISetCalcElementAction>) {
      if (action.payload.id !== action.payload.arrayId) {
        state.calcElements = state.calcElements.filter((i) => i !== action.payload.id);
        state.calcElements = [
          ...state.calcElements.slice(0, state.calcElements.indexOf(action.payload.arrayId)),
          action.payload.id,
          ...state.calcElements.slice(state.calcElements.indexOf(action.payload.arrayId)),
        ];
      }
    },
    removeCalcElement(state, action: PayloadAction<string>) {
      state.calcElements = state.calcElements.filter((item) => item !== action.payload);
    },
    clearCalcElement(state) {
      state.calcElements = [];
    },
  },
});

export default calcElementsSlice.reducer;
export const calcElementsActions = calcElementsSlice.actions;
