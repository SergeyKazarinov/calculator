import { FC, useMemo } from 'react';
import { OPERANDS } from 'modules/calcElements/utils/constants';
import { Button } from 'UI';
import s from './styles.module.scss';

interface IOperandComponentProps {}

const OperandComponent: FC<IOperandComponentProps> = () => {
  const buttons = useMemo(
    () => OPERANDS.map((item, index) => <Button key={index} type="operand" title={item} />),
    [OPERANDS],
  );

  return <div className={s.container}>{buttons}</div>;
};
export default OperandComponent;
