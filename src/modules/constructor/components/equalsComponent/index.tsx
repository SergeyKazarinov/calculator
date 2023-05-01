import { FC } from 'react';
import { Button } from 'UI';
import CalcElementsEnum from 'types/calcElementsEnum';
import useDragAndDrop from 'modules/constructor/hooks/useDragAndDrop';
import { useAppDispatch, useAppSelector } from 'store';
import { calcActions } from 'modules/constructor/store/calcSlice';
import s from './styles.module.scss';

interface IEqualsComponentProps {
  onDoubleClick: (type: string) => void;
}

const EqualsComponent: FC<IEqualsComponentProps> = ({ onDoubleClick }) => {
  const {
    isHover, getItem, isDrag, dropTarget, dragRef,
  } = useDragAndDrop('calcElement', 'calcElement', CalcElementsEnum.EQUALS);
  const checkbox = useAppSelector((store) => store.checkbox.checkbox);
  const dispatch = useAppDispatch();

  const handleDoubleClick = (type: string) => {
    if (checkbox) {
      onDoubleClick(type);
    }
  };

  const handleClick = () => {
    dispatch(calcActions.setEqualNumber());
  };

  return (
    <div ref={checkbox ? dragRef : null}>
      <div
        className={`${s.container} ${isDrag && s.container_inactive} ${isHover && getItem.id !== CalcElementsEnum.DISPLAY && s.dropLine}`}
        onDoubleClick={() => {
          handleDoubleClick(CalcElementsEnum.EQUALS);
        }}
        ref={dropTarget}
      >
        <Button type={CalcElementsEnum.EQUALS} title={'='} disabled={checkbox} onClick={handleClick}/>
      </div>
    </div>
  );
};

export default EqualsComponent;
