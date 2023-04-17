import { FC, useMemo } from 'react';
import { OPERANDS } from 'modules/calcElements/utils/constants';
import { Button } from 'UI';
import { useDrag } from 'react-dnd';
import CalcElementsEnum from 'types/calcElementsEnum';
import s from './styles.module.scss';

interface IOperandComponentProps {}

const OperandComponent: FC<IOperandComponentProps> = () => {
  const [, dragRef] = useDrag({
    type: 'calcElement',
    item: { id: CalcElementsEnum.OPERAND },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const buttons = useMemo(
    () => OPERANDS.map((item, index) => <Button key={index} type={CalcElementsEnum.OPERAND} title={item} disabled={true} />),
    [OPERANDS],
  );

  return (
    <div className={s.container} ref={dragRef}>
      {buttons}
    </div>
  );
};
export default OperandComponent;
