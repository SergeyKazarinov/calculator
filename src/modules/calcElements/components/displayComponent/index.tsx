import { FC } from 'react';
import { useDrag } from 'react-dnd';
import s from './styles.module.scss';

interface IDisplayComponentProps {}

const DisplayComponent: FC<IDisplayComponentProps> = () => {
  const [{ isDrag }, dragRef] = useDrag({
    type: 'calcElement',
    item: { id: 'display' },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <div className={`${s.container} ${isDrag && s.dragging}`} ref={dragRef}>
      <div className={s.display}>0</div>
    </div>
  );
};

export default DisplayComponent;
