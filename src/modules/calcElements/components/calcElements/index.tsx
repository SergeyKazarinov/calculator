import { FC } from 'react';
import s from './styles.module.scss';
import DisplayComponent from '../displayComponent';
import DigitKeyboardComponent from '../digitKeyboardComponent';
import OperandComponent from '../operandComponent';

interface CalcElementsProps {}

const CalcElements: FC<CalcElementsProps> = () => (
  <div className={s.cardElements}>
    <DisplayComponent />
    <OperandComponent />
    <DigitKeyboardComponent />
  </div>
);

export default CalcElements;
