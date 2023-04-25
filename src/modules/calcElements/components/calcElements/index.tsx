import { FC } from 'react';
import { useAppSelector } from 'store';
import s from './styles.module.scss';
import DisplayComponent from '../displayComponent';
import DigitKeyboardComponent from '../digitKeyboardComponent';
import OperandComponent from '../operandComponent';
import EqualsComponent from '../equalsComponent';

interface CalcElementsProps {}

const CalcElements: FC<CalcElementsProps> = () => {
  const checkbox = useAppSelector((store) => store.checkbox.checkbox);
  return (
    <div className={`${s.cardElements} ${!checkbox && s.cardElements_inactive}`}>
      <DisplayComponent />
      <OperandComponent />
      <DigitKeyboardComponent />
      <EqualsComponent />
    </div>
  );
};

export default CalcElements;
