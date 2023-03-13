import { Keyboard } from 'modules/digitKeyboard';
import { FC } from 'react';
import s from './styles.module.scss';

interface CalcElementsProps {}

const CalcElements: FC<CalcElementsProps> = () => (
  <div className={s.cardElements}>
    <Keyboard />
  </div>
);

export default CalcElements;
