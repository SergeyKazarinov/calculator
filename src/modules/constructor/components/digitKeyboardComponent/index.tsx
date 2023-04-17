import { FC } from 'react';
import { DIGITS } from 'modules/calcElements/utils/constants';
import { Button } from 'UI';
import CalcElementsEnum from 'types/calcElementsEnum';
import s from './styles.module.scss';

interface IDigitKeyboardComponentProps {
  onDoubleClick: (type: string) => void;
}

const DigitKeyboardComponent: FC<IDigitKeyboardComponentProps> = ({onDoubleClick}) => {
  const buttons = DIGITS.map((item, index) =>
    item === 0 ? <Button key={index} type="zero" title={item} disabled={true}/> : <Button key={index} type={CalcElementsEnum.DIGITS} title={item} disabled={true}/>,
  );

  return <div className={`${s.keyboard} ${s.grid}`} onDoubleClick={() => { onDoubleClick(CalcElementsEnum.DIGITS) }}>{buttons}</div>;
};

export default DigitKeyboardComponent;
