import { FC } from 'react';
import { useAppDispatch } from 'services';
import { calcElementsActions } from 'services/slices/calcElementsSlice';
import s from './styles.module.scss';

interface IDisplayComponentProps {

}

const DisplayComponent: FC<IDisplayComponentProps> = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(calcElementsActions.setDisplay(false));
  };
  return (
    <div className={`${s.container}`} onDoubleClick={handleClick}>
      <div className={s.display}>0</div>
    </div>
  );
};

export default DisplayComponent;
