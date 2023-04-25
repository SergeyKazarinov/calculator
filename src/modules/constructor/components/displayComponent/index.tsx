import { FC } from 'react';
import { calcElementsActions } from 'store/slices/calcElementsSlice';
import { useAppDispatch, useAppSelector } from 'store';
import s from './styles.module.scss';

interface IDisplayComponentProps {

}

const DisplayComponent: FC<IDisplayComponentProps> = () => {
  // const calcDisplay = useAppCalcSelector(store => store.calculator.display);
  const dispatch = useAppDispatch();
  const checkbox = useAppSelector((store) => store.checkbox.checkbox);
  // const calcDisplay = useAppSelector(store => store.calculator.display);

  const handleClick = () => {
    if (checkbox) {
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
