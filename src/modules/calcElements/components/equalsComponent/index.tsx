import { FC } from 'react';
import { Button } from 'UI';
import { useDrag } from 'react-dnd';
import s from './styles.module.scss';

interface IEqualsComponentProps {}

const EqualsComponent: FC<IEqualsComponentProps> = () => {
  const [, dragRef] = useDrag({
    type: 'calcElement',
    item: { id: 'equals' },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <div className={s.container} ref={dragRef}>
      <Button type="equals" title={'='} disabled={true} />
    </div>
  );
};

export default EqualsComponent;
