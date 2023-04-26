import { FC } from 'react';
import { useAppSelector } from 'store';
import s from './styles.module.scss';

interface IButtonProps {
  title: string | number;
  type: 'digits' | 'zero' | 'operand' | 'equals';
  disabled: boolean;
  onClick?: (number: string) => void;
}

const Button: FC<IButtonProps> = ({
  type, title, disabled, onClick,
}) => {
  const checkbox = useAppSelector((store) => store.checkbox.checkbox);

  const handleClick = () => {
    if (onClick && !checkbox) {
      onClick(String(title));
    }
  };

  return (
    <button
      className={`button ${s.button} ${s[type]} ${!disabled && s.button_active}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
export default Button;
