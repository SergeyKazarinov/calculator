import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { checkboxActions } from 'store/slices/checkboxSlice';
import s from './styles.module.scss';

interface IFilterCheckbox {}

const Checkbox: FC<IFilterCheckbox> = () => {
  const checkbox = useAppSelector((store) => store.checkbox.checkbox);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(checkboxActions.changeCheckbox());
  };

  return (
    <div className={s.filterCheckbox}>
      <label className={s.switch} htmlFor="checkbox">
        <input type="checkbox" id="checkbox" defaultChecked={checkbox} className={s.input} onChange={handleChange}/>
        <div className={s.slider}></div>
      </label>
    </div>
  );
};

export default Checkbox;
