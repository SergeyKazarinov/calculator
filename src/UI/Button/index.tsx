import { FC } from 'react';
import s from './styles.module.scss';

interface IButtonProps {
  title: string | number;
  type: 'digits' | 'zero' | 'operand' | 'equals';
  disabled?: boolean;
}

const Button: FC<IButtonProps> = ({ type, title, disabled }) => (
  <button className={`button ${s.button} ${s[type]} ${!disabled && s.button_active}`}>{title}</button>
);

export default Button;
