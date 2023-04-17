import { FC } from 'react';
import { DIGITS } from 'modules/calcElements/utils/constants';
import { Button } from 'UI';
import { useDrag } from 'react-dnd';
import CalcElementsEnum from 'types/calcElementsEnum';
import s from './styles.module.scss';

interface IDigitKeyboardComponentProps {}

const DigitKeyboardComponent: FC<IDigitKeyboardComponentProps> = () => {
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
    <div className={`${s.keyboard} ${s.grid}`} ref={dragRef}>
      {buttons}
    </div>
  );
};

export default DigitKeyboardComponent;
