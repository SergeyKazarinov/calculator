import { FC } from 'react';
import s from './styles.module.scss';
import DigitKeyboard from '../digitKeyboard';

interface CalcElementsProps {}

const CalcElements: FC<CalcElementsProps> = () => (
  <div className={s.cardElements}>
    <DigitKeyboard />
  </div>
);

export default CalcElements;
