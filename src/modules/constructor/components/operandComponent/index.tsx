import { FC, useMemo } from 'react';
import { OPERANDS } from 'modules/calcElements/utils/constants';
import { Button } from 'UI';
import CalcElementsEnum from 'types/calcElementsEnum';
import useDragAndDrop from 'modules/constructor/hooks/useDragAndDrop';
import s from './styles.module.scss';

interface IOperandComponentProps {
  onDoubleClick: (type: string) => void;
}

const OperandComponent: FC<IOperandComponentProps> = ({onDoubleClick}) => {
  const buttons = useMemo(
    () => OPERANDS.map((item, index) => <Button key={index} type={CalcElementsEnum.OPERAND} title={item} disabled={true}/>),
    [OPERANDS],
  );
  const {isHover, dropTarget, dragRef} = useDragAndDrop('calcElement', 'calcElement', CalcElementsEnum.OPERAND);

  return (
    <div ref={dragRef}>
      <div
        className={`${s.container} ${isHover && s.dropLine}`}
        onDoubleClick={() => onDoubleClick(CalcElementsEnum.OPERAND)}
        ref={dropTarget}
      >
        {buttons}
      </div>
    </div>
  );
};
export default OperandComponent;
