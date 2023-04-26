import { FC, useMemo } from 'react';
import { Button } from 'UI';
import CalcElementsEnum from 'types/calcElementsEnum';
import useDragAndDrop from 'modules/constructor/hooks/useDragAndDrop';
import { useAppSelector } from 'store';
import { OPERANDS } from 'modules/constructor/utils/constants';
import s from './styles.module.scss';

interface IOperandComponentProps {
  onDoubleClick: (type: string) => void;
}

const OperandComponent: FC<IOperandComponentProps> = ({ onDoubleClick }) => {
  const checkbox = useAppSelector((store) => store.checkbox.checkbox);
  const {
    isHover, getItem, isDrag, dropTarget, dragRef,
  } = useDragAndDrop('calcElement', 'calcElement', CalcElementsEnum.OPERAND);

  const handleDoubleClick = (type: string) => {
    if (checkbox) {
      onDoubleClick(type);
    }
  };

  const handleClick = (number: string) => {
    console.log(number);
  };

  const buttons = useMemo(
    () => OPERANDS.map(
      (item, index) => (
        <Button
          key={index}
          type={CalcElementsEnum.OPERAND}
          title={item}
          disabled={checkbox}
          onClick={handleClick}
        />
      ),
    ),
    [OPERANDS, checkbox],
  );
  return (
    <div ref={checkbox ? dragRef : null}>
      <div
        className={`${s.container} ${isDrag && s.container_inactive} ${isHover && getItem.id !== CalcElementsEnum.DISPLAY && s.dropLine}`}
        onDoubleClick={() => handleDoubleClick(CalcElementsEnum.OPERAND)}
        ref={dropTarget}
      >
        {buttons}
      </div>
    </div>
  );
};
export default OperandComponent;
