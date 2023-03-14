import { FC } from 'react';
import ContainerComponent from '../containerComponent';
import DisplayComponent from '../displayComponent';
import OperandComponent from '../operandComponent';
import DigitKeyboardComponent from '../digitKeyboardComponent';
import EqualsComponent from '../equalsComponent';
import s from './styles.module.scss';

interface IConstructorElementProps {}

const ConstructorElement: FC<IConstructorElementProps> = () => (
  <div className={s.container}>
    <DisplayComponent />
    <OperandComponent />
    <DigitKeyboardComponent />
    <EqualsComponent />
    <ContainerComponent />
  </div>
);

export default ConstructorElement;
