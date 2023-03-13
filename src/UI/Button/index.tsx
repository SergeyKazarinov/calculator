import { FC } from 'react';
import s from './styles.module.scss';

interface IButtonProps {
  title: string | number;
  type: 'digits' | 'zero' | 'operand' | 'equals';
}

const Button: FC<IButtonProps> = ({ type, title }) => (
  <button className={`button ${s.button} ${s[type]}`}>{title}</button>
);

export default Button;
