import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OPERANDS } from '../utils/constants';

interface ICalcSlice {
  display: string;
  theFirstNumber: null | number;
  theSecondNumber: null | number;
  oprtr: string;
  calcResult: number | null;
  calcCash: string;
}

const getCalcResult = (theFirstNumber: number, oprtr: string, theSecondNumber: number) => {
  let result;
  switch (oprtr) {
    case '+':
      result = theFirstNumber + theSecondNumber;
      break;
    case '-':
      result = theFirstNumber - theSecondNumber;
      break;
    case 'x':
      result = theFirstNumber * theSecondNumber;
      break;
    case '/':
      result = theFirstNumber / theSecondNumber;
      break;
    default:
      result = Infinity;
  }

  if (String(result).length > 8 && !String(result).includes('.')) {
    result = result.toExponential(5);
    console.log(result);
  }
  if (String(result).includes('.')) {
    result = Number(result).toFixed(8);
  }
  return Number(result);
};

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
      state.oprtr = '';
      state.theSecondNumber = null;
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
      state.calcCash += action.payload;

      console.log(state.calcCash);
    },
    setOperator(state, action: PayloadAction<string>) {
      if (state.display.includes(',')) {
        state.display = state.display.replace(',', '.');
      }
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
        state.calcResult = getCalcResult(state.theFirstNumber, state.oprtr, Number(state.display));
        if (state.calcResult === Infinity) {
          state.display = 'Не определено';
          state.oprtr = '';
          state.theFirstNumber = null;
        } else {
          state.oprtr = action.payload;
          state.theFirstNumber = state.calcResult;
          state.display = String(state.calcResult).replace('.', ',');
        }
      }
      state.calcCash += action.payload;
    },
  },
});

export default calcSlice.reducer;
export const calcActions = calcSlice.actions;
