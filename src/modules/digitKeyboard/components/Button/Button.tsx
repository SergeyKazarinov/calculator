import { FC } from 'react';
import s from './Button.module.scss';

interface IButtonProps {
  title: string | number;
  type: 'digits' | 'zero';
}

const Button: FC<IButtonProps> = ({ type, title }) => <button className={`${s.button} ${s[type]}`}>{title}</button>;

export default Button;
