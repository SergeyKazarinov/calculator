import { FC } from 'react';
import Button from 'UI/Button';
import digits from 'modules/calcElements/utils/constants';
import s from './styles.module.scss';

interface IDigitKeyboardComponentProps {}

const DigitKeyboardComponent: FC<IDigitKeyboardComponentProps> = () => {
  const buttons = digits.map((item, index) => (
    <>
      {item === 0 ? <Button key={index} type="zero" title={item} /> : <Button key={index} type="digits" title={item} />}
    </>
  ));

  return <div className={`${s.keyboard} ${s.grid}`}>{buttons}</div>;
};

export default DigitKeyboardComponent;
