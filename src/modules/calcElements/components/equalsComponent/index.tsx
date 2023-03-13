import { FC } from 'react';
import { Button } from 'UI';
import s from './styles.module.scss';

interface IEqualsComponentProps {}

const EqualsComponent: FC<IEqualsComponentProps> = () => (
  <div className={s.container}>
    <Button type="equals" title={'='} />
  </div>
);

export default EqualsComponent;
