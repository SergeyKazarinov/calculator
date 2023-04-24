import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'services';
import { calcElementsActions } from 'services/slices/calcElementsSlice';
import s from './styles.module.scss';

interface IDisplayComponentProps {

}

const DisplayComponent: FC<IDisplayComponentProps> = () => {
  const dispatch = useAppDispatch();
  const checkbox = useAppSelector(store => store.checkbox.checkbox);

  const handleClick = () => {
    if(checkbox) {
      dispatch(calcElementsActions.setDisplay(false));
    }
  };
  return (
    <div className={`${s.container}`} onDoubleClick={handleClick}>
      <div className={s.display}>0</div>
    </div>
  );
};

export default DisplayComponent;
