import { FC } from 'react';
import { Button } from 'UI';
import CalcElementsEnum from 'types/calcElementsEnum';
import s from './styles.module.scss';

interface IEqualsComponentProps {
  onDoubleClick: (type: string) => void;
}

const EqualsComponent: FC<IEqualsComponentProps> = ({onDoubleClick}) => (
  <div className={s.container} onDoubleClick={() => {onDoubleClick(CalcElementsEnum.EQUALS)}}>
    <Button type={CalcElementsEnum.EQUALS} title={'='} disabled={true}/>
  </div>
);

export default EqualsComponent;
