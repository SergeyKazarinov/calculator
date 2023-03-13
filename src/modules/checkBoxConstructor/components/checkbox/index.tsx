import { FC } from 'react';
import s from './styles.module.scss';

interface IFilterCheckbox {}

const Checkbox: FC<IFilterCheckbox> = () => (
  <div className={s.filterCheckbox}>
    <label className={s.switch} htmlFor="checkbox">
      <input type="checkbox" id="checkbox" className={s.input} />
      <div className={s.slider}></div>
    </label>
  </div>
);

export default Checkbox;
