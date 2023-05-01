import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OPERANDS, UNDEFINED } from '../utils/constants';
import getCalcResult from '../helpers/getCalcResult';
import replaceNumber from '../helpers/replaceNumber';
import refactResult from '../helpers/refactResult';

interface ICalcSlice {
  display: string;
  theFirstNumber: null | number;
  oprtr: string | null;
  calcResult: number | null;
  calcCash: string;
}

const calcSlice = createSlice({
  name: 'calcSlice',
  initialState: {
    display: '0',
    theFirstNumber: null,
    theSecondNumber: null,
    oprtr: '',
    calcResult: null,
    calcCash: '',
  } as ICalcSlice,
  reducers: {
    clearCalculator(state) {
      state.calcResult = null;
      state.display = '0';
      state.theFirstNumber = null;
      state.oprtr = null;
      state.calcCash = '';
    },
    setNumber(state, action: PayloadAction<string>) {
      if (state.display === '0' || OPERANDS.find((i) => i === state.calcCash.slice(-1))) {
        if (action.payload === ',') {
          state.display += action.payload;
        } else {
          state.display = action.payload;
        }
      } else if (state.display.length < 9 && !(state.display.includes(',') && action.payload === ',')) {
        state.display += action.payload;
      }

      if (state.display === UNDEFINED || state.calcCash.slice(-1) === '=') {
        state.display = action.payload;
      }
      state.calcCash += action.payload;
    },
    setOperator(state, action: PayloadAction<string>) {
      state.display = replaceNumber(state.display);
      if (!state.theFirstNumber) {
        state.theFirstNumber = Number(state.display);
        state.oprtr = action.payload;
        state.display = '0';
      } else if (
        action.payload !== state.calcCash.slice(-1)
        && OPERANDS.find((i) => i === state.calcCash.slice(-1))
      ) {
        state.oprtr = action.payload;
      } else {
        state.calcResult = getCalcResult(state.theFirstNumber, state.oprtr!, Number(state.display));
        console.log(state.calcResult);
        if (state.calcResult === Infinity) {
          state.display = UNDEFINED;
          state.oprtr = null;
          state.theFirstNumber = null;
        } else {
          state.oprtr = action.payload;
          state.theFirstNumber = state.calcResult;
          state.display = refactResult(state.calcResult);
        }
      }
      state.calcCash += action.payload;
    },
    setEqualNumber(state) {
      state.display = replaceNumber(state.display);

      if (state.oprtr && state.theFirstNumber) {
        state.calcResult = getCalcResult(state.theFirstNumber, state.oprtr, Number(state.display));
        state.display = refactResult(state.calcResult);

        if (state.calcResult === Infinity) {
          state.display = UNDEFINED;
        }
      }
      state.theFirstNumber = null;
      state.oprtr = null;
      state.calcCash += '=';
    },
  },
});

export default calcSlice.reducer;
export const calcActions = calcSlice.actions;
