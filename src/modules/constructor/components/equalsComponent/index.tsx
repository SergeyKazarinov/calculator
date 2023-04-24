import { FC } from 'react';
import { Button } from 'UI';
import CalcElementsEnum from 'types/calcElementsEnum';
import useDragAndDrop from 'modules/constructor/hooks/useDragAndDrop';
import { useAppSelector } from 'services';
import s from './styles.module.scss';

interface IEqualsComponentProps {
  onDoubleClick: (type: string) => void;
}

const EqualsComponent: FC<IEqualsComponentProps> = ({onDoubleClick}) => {
  const {isHover, getItem, isDrag, dropTarget, dragRef} = useDragAndDrop('calcElement', 'calcElement', CalcElementsEnum.EQUALS);
  const checkbox = useAppSelector(store => store.checkbox.checkbox);

  const handleDoubleClick = (type: string) => {
    if (checkbox) {
      onDoubleClick(type);
    }
  };

  return (
    <div ref={checkbox ? dragRef : null}>
      <div
        className={`${s.container} ${isDrag && s.container_inactive} ${isHover && getItem.id !== CalcElementsEnum.DISPLAY && s.dropLine}`}
        onDoubleClick={() => {handleDoubleClick(CalcElementsEnum.EQUALS)}}
        ref={dropTarget}
      >
        <Button type={CalcElementsEnum.EQUALS} title={'='} disabled={true}/>
      </div>
    </div>
  );
  
};

export default EqualsComponent;
