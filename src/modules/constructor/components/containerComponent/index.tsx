import { FC } from 'react';
import { ConnectDropTarget } from 'react-dnd';
import s from './styles.module.scss';
import icon from '../../media/icon.svg';

interface IContainerComponentProps {
  isHover: boolean;
  hasCalcElement: boolean;
  isDisplay: boolean;
  dropTarget: ConnectDropTarget;
}

const ContainerComponent: FC<IContainerComponentProps> = ({isHover, hasCalcElement, dropTarget}) => (
  <div className={`${s.container} ${!hasCalcElement && isHover && s.container_dropLine} ${!hasCalcElement && s.container_inactive}`} ref={dropTarget}>
    {hasCalcElement && <img src={icon} alt="Иконка добавления картинки" />}
    {hasCalcElement && <h2 className={`title ${s.title}`}>Перетащите сюда</h2>}
    {hasCalcElement && <p className={`title ${s.subtitle}`}>любой элемент из левой панели</p>}
  </div>
);

export default ContainerComponent;
