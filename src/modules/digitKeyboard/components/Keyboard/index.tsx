import { FC } from 'react';
import digits from 'modules/digitKeyboard/utils/constants';
import s from './styles.module.scss';
import Button from '../Button/Button';

interface IKeyboardProps {}

const Keyboard: FC<IKeyboardProps> = () => {
  const buttons = digits.map((item, index) => (
    <>
      {item === 0 ? <Button key={index} type="zero" title={item} /> : <Button key={index} type="digits" title={item} />}
    </>
  ));

  return <div className={`${s.keyboard} ${s.grid}`}>{buttons}</div>;
};

export default Keyboard;
