import { FC, useEffect } from 'react';
import { calcElementsActions } from 'store/slices/calcElementsSlice';
import { useAppDispatch, useAppSelector } from 'store';
import { calcActions } from 'modules/constructor/store/calcSlice';
import s from './styles.module.scss';

interface IDisplayComponentProps {

}

const DisplayComponent: FC<IDisplayComponentProps> = () => {
  const dispatch = useAppDispatch();
  const checkbox = useAppSelector((store) => store.checkbox.checkbox);
  const calcDisplay = useAppSelector((store) => store.calculator.display);

  useEffect(() => {
    if (checkbox) {
      dispatch(calcActions.clearCalculator());
    }
  }, [checkbox]);

  const handleClick = () => {
    if (checkbox) {
      dispatch(calcElementsActions.setDisplay(false));
    }
  };
  return (
    <div className={`${s.container}`} onDoubleClick={handleClick}>
      <div className={s.display}>{calcDisplay}</div>
    </div>
  );
};

export default DisplayComponent;
