import { FC } from 'react';
import { DIGITS } from 'modules/calcElements/utils/constants';
import { Button } from 'UI';
import { useDrag } from 'react-dnd';
import CalcElementsEnum from 'types/calcElementsEnum';
import { useAppSelector } from 'services';
import s from './styles.module.scss';

interface IDigitKeyboardComponentProps {}

const DigitKeyboardComponent: FC<IDigitKeyboardComponentProps> = () => {
  const calcElements = useAppSelector(store => store.calcElmts.calcElements);
  const isDigits = calcElements.some(item => item === CalcElementsEnum.DIGITS);
  const [, dragRef] = useDrag({
    type: 'calcElement',
    item: { id: CalcElementsEnum.DIGITS },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const buttons = DIGITS.map((item, index) =>
    item === 0 ? (
      <Button key={index} type="zero" title={item} disabled={true} />
    ) : (
      <Button key={index} type={CalcElementsEnum.DIGITS} title={item} disabled={true} />
    ),
  );

  return (
    <div className={`${s.keyboard} ${s.grid} ${isDigits && s.grid_inactive}`} ref={!isDigits ? dragRef : null}>
      {buttons}
    </div>
  );
};

export default DigitKeyboardComponent;
