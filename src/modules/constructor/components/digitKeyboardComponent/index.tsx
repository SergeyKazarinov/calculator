import { FC } from 'react';
import { Button } from 'UI';
import CalcElementsEnum from 'types/calcElementsEnum';
import useDragAndDrop from 'modules/constructor/hooks/useDragAndDrop';
import { useAppDispatch, useAppSelector } from 'store';
import { calcActions } from 'modules/constructor/store/calcSlice';
import { DIGITS } from 'modules/constructor/utils/constants';
import s from './styles.module.scss';

interface IDigitKeyboardComponentProps {
  onDoubleClick: (type: string) => void;
}

const DigitKeyboardComponent: FC<IDigitKeyboardComponentProps> = ({ onDoubleClick }) => {
  const {
    isHover, getItem, dropTarget, dragRef, isDrag,
  } = useDragAndDrop('calcElement', 'calcElement', CalcElementsEnum.DIGITS);
  const checkbox = useAppSelector((store) => store.checkbox.checkbox);
  const dispatch = useAppDispatch();

  const handleDoubleClick = (type: string) => {
    if (checkbox) {
      onDoubleClick(type);
    }
  };

  const handleClick = (number: string) => {
    dispatch(calcActions.setTheFirstNumber(number));
  };

  const buttons = DIGITS.map((item, index) => (item === 0
    ? <Button key={index} type="zero" title={item} disabled={checkbox} onClick={handleClick}/>
    : <Button
      key={index}
      type={CalcElementsEnum.DIGITS}
      title={item}
      disabled={checkbox}
      onClick={handleClick}
    />));

  return (
    <div className={`${s.keyboard} ${isHover && getItem.id !== CalcElementsEnum.DISPLAY && s.dropLine} ${isDrag && s.keyboard_inactive}`} ref={dropTarget}>
      <div
        className={`${s.grid}`}
        onDoubleClick={() => {
          handleDoubleClick(CalcElementsEnum.DIGITS);
        }}
        ref={checkbox ? dragRef : null}
      >
        {buttons}
      </div>
    </div>);
};

export default DigitKeyboardComponent;
