import { FC } from 'react';
import { DIGITS } from 'modules/calcElements/utils/constants';
import { Button } from 'UI';
import CalcElementsEnum from 'types/calcElementsEnum';
import useDragAndDrop from 'modules/constructor/hooks/useDragAndDrop';
import s from './styles.module.scss';

interface IDigitKeyboardComponentProps {
  onDoubleClick: (type: string) => void;
}

const DigitKeyboardComponent: FC<IDigitKeyboardComponentProps> = ({onDoubleClick}) => {
  const { isHover, dropTarget, dragRef } = useDragAndDrop('calcElement', 'calcElement', CalcElementsEnum.DIGITS);
  const buttons = DIGITS.map((item, index) =>
    item === 0 ? <Button key={index} type="zero" title={item} disabled={true}/> : <Button key={index} type={CalcElementsEnum.DIGITS} title={item} disabled={true}/>,
  );


  return (
    <div className={`${s.keyboard} ${isHover && s.dropLine}`} ref={dropTarget}>
      <div 
        className={`${s.grid}`}
        onDoubleClick={() => { onDoubleClick(CalcElementsEnum.DIGITS) }} 
        ref={dragRef}
      >
        {buttons}
      </div>
    </div>);
};

export default DigitKeyboardComponent;
