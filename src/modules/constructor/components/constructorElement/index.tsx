import { FC } from 'react';
import { useDrop } from 'react-dnd';
import { useAppDispatch, useAppSelector } from 'services';
import { calcElementsActions } from 'services/slices/calcElementsSlice';
import CalcElementsEnum from 'types/calcElementsEnum';
import ContainerComponent from '../containerComponent';
import DisplayComponent from '../displayComponent';
import s from './styles.module.scss';
import OperandComponent from '../operandComponent';
import DigitKeyboardComponent from '../digitKeyboardComponent';
import EqualsComponent from '../equalsComponent';

interface IConstructorElementProps {}

const ConstructorElement: FC<IConstructorElementProps> = () => {
  const dispatch = useAppDispatch();
  const isDisplay = useAppSelector((store) => store.calcElmts.isDisplay);
  const calcElements = useAppSelector(store => store.calcElmts.calcElements);
  const onDropHandler = (item: { id: string }) => {
    if (item.id === CalcElementsEnum.DISPLAY) {
      dispatch(calcElementsActions.setDisplay(true));
    } else {
      dispatch(calcElementsActions.setCalcElement(item.id));
    }
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'calcElement',
    drop(item: { id: string }) {
      onDropHandler(item);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const handleDoubleClick = (type: string) => {
    dispatch(calcElementsActions.removeCalcElement(type));
  };

  const elements = calcElements.map(value => (
    (value === CalcElementsEnum.OPERAND) ? <OperandComponent onDoubleClick={handleDoubleClick}/> : 
      (value === CalcElementsEnum.DIGITS) ? <DigitKeyboardComponent onDoubleClick={handleDoubleClick}/> : 
        <EqualsComponent onDoubleClick={handleDoubleClick}/>));

  return (
    <div className={`${s.container} ${(isHover && (!isDisplay && !(calcElements.length > 0))) && s.hoverDrop}`} ref={dropTarget}>
      {isDisplay && <DisplayComponent />}
      {elements}
      {(!isDisplay && !calcElements.length) && <ContainerComponent />}
    </div>
  );
};

export default ConstructorElement;
