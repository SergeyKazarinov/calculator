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
      dispatch(calcElementsActions.addCalcElement(item.id));
    }
  };
  
  const [{ isHover, getItem, canDrop }, dropTarget] = useDrop({
    accept: 'calcElement',
    drop(item: { id: string }) {
      onDropHandler(item);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
      getItem: monitor.getItem(),
      canDrop: monitor.canDrop(),
    })
  });
  
  const hasCalcElement = !isDisplay && !calcElements.length;
  const isDropLine = canDrop && !isDisplay && getItem.id === CalcElementsEnum.DISPLAY;
  
  const handleDoubleClick = (type: string) => {
    dispatch(calcElementsActions.removeCalcElement(type));
  };

  const elements = calcElements.map(value => (
    (value === CalcElementsEnum.OPERAND) 
      ? <OperandComponent key={CalcElementsEnum.OPERAND} onDoubleClick={handleDoubleClick}/> 
      : (value === CalcElementsEnum.DIGITS) 
        ? <DigitKeyboardComponent key={CalcElementsEnum.DIGITS} onDoubleClick={handleDoubleClick}/> 
        : <EqualsComponent key={CalcElementsEnum.EQUALS} onDoubleClick={handleDoubleClick}/>));

  return (
    <div className={`${s.container} ${(isHover && !!hasCalcElement) && s.hoverDrop} ${isDropLine && s.dropLine}`} >
      {isDisplay && <DisplayComponent />}
      {elements}
      <ContainerComponent 
        isHover={isHover}
        hasCalcElement={hasCalcElement}
        isDisplay={isDisplay}
        dropTarget={dropTarget} 
        getItem={getItem}
      />
    </div>
  );
};

export default ConstructorElement;
