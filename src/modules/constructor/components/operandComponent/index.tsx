import { FC, useMemo } from 'react';
import { OPERANDS } from 'modules/calcElements/utils/constants';
import { Button } from 'UI';
import CalcElementsEnum from 'types/calcElementsEnum';
import s from './styles.module.scss';

interface IOperandComponentProps {
  onDoubleClick: (type: string) => void;
}

const OperandComponent: FC<IOperandComponentProps> = ({onDoubleClick}) => {
  const buttons = useMemo(
    () => OPERANDS.map((item, index) => <Button key={index} type={CalcElementsEnum.OPERAND} title={item} disabled={true}/>),
    [OPERANDS],
  );

  return <div className={s.container} onDoubleClick={() => onDoubleClick(CalcElementsEnum.OPERAND)}>{buttons}</div>;
};
export default OperandComponent;
