import { FC } from 'react';
import { ConnectDropTarget } from 'react-dnd';
import CalcElementsEnum from 'types/calcElementsEnum';
import s from './styles.module.scss';
import icon from '../../media/icon.svg';

interface IContainerComponentProps {
  isHover: boolean;
  hasCalcElement: boolean;
  isDisplay: boolean;
  dropTarget: ConnectDropTarget;
  getItem: {id: string};
}

const ContainerComponent: FC<IContainerComponentProps> = ({isHover, hasCalcElement, dropTarget, getItem}) => {
  const isDropLine = !hasCalcElement && isHover && getItem.id !== CalcElementsEnum.DISPLAY;
  
  return (
    <div 
      className={`${s.container} ${isDropLine && s.container_dropLine} ${!hasCalcElement && s.container_inactive}`} 
      ref={dropTarget}
    >
      {hasCalcElement && <img src={icon} alt="Иконка добавления картинки" />}
      {hasCalcElement && <h2 className={`title ${s.title}`}>Перетащите сюда</h2>}
      {hasCalcElement && <p className={`title ${s.subtitle}`}>любой элемент из левой панели</p>}
    </div>
  );};

export default ContainerComponent;
