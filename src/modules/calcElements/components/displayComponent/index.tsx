import { FC } from 'react';
import s from './styles.module.scss';

interface IDisplayComponentProps {}

const DisplayComponent: FC<IDisplayComponentProps> = () => (
  <div className={s.container}>
    <div className={s.display}>0</div>
  </div>
);

export default DisplayComponent;
