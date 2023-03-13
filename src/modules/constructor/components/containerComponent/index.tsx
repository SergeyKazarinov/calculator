import { FC } from 'react';
import s from './styles.module.scss';
import icon from '../../media/icon.svg';

interface IContainerComponentProps {}

const ContainerComponent: FC<IContainerComponentProps> = () => (
  <div className={s.container}>
    <img src={icon} alt="Иконка добавления картинки" />
    <h2 className={`title ${s.title}`}>Перетащите сюда</h2>
    <p className={`title ${s.subtitle}`}>любой элемент из левой панели</p>
  </div>
);

export default ContainerComponent;
