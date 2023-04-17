import { FC } from 'react';
import { Button } from 'UI';
import { useDrag } from 'react-dnd';
import { useAppSelector } from 'services';
import CalcElementsEnum from 'types/calcElementsEnum';
import s from './styles.module.scss';

interface IEqualsComponentProps {}

const EqualsComponent: FC<IEqualsComponentProps> = () => {
  const caltElement = useAppSelector(store => store.calcElmts.calcElements);
  const isEquals = caltElement.some(i => i === CalcElementsEnum.EQUALS);
  const [, dragRef] = useDrag({
    type: 'calcElement',
    item: { id: CalcElementsEnum.EQUALS },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <div className={`${s.container} ${isEquals && s.container_inactive}`} ref={!isEquals ? dragRef : null}>
      <Button type={CalcElementsEnum.EQUALS} title={'='} disabled={true} />
    </div>
  );
};

export default EqualsComponent;
