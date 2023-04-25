import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import calcSlice from 'modules/constructor/store/calcSlice';
import calcElementsSlice from './slices/calcElementsSlice';
import checkboxSlice from './slices/checkboxSlice';

const rootReducer = combineReducers({
  calcElmts: calcElementsSlice,
  checkbox: checkboxSlice,
  calculator: calcSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
