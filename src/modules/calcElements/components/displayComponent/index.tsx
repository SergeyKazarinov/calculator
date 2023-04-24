import { FC } from 'react';
import { useDrag } from 'react-dnd';
import { useAppSelector } from 'services';
import CalcElementsEnum from 'types/calcElementsEnum';
import s from './styles.module.scss';

interface IDisplayComponentProps {}

const DisplayComponent: FC<IDisplayComponentProps> = () => {
  const isDisplay = useAppSelector(store => store.calcElmts.isDisplay);
  const [, dragRef] = useDrag({
    type: 'calcElement',
    item: { id: CalcElementsEnum.DISPLAY },
  });

  return (
    <div className={`${s.container} ${isDisplay && s.container_inactive}`} ref={!isDisplay ? dragRef : null}>
      <div className={s.display}>0</div>
    </div>
  );
};

export default DisplayComponent;
