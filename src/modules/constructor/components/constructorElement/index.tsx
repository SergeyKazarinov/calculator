import { FC } from 'react';
import { useDrop } from 'react-dnd';
import ContainerComponent from '../containerComponent';
// import DisplayComponent from '../displayComponent';
// import OperandComponent from '../operandComponent';
// import DigitKeyboardComponent from '../digitKeyboardComponent';
// import EqualsComponent from '../equalsComponent';
import s from './styles.module.scss';

interface IConstructorElementProps {}

const ConstructorElement: FC<IConstructorElementProps> = () => {
  const onDropHandler = (item: string) => {
    console.log(item);
  };
  const [{ isHover }, dropTarget] = useDrop({
    accept: 'calcElement',
    drop(item) {
      console.log(item);
      onDropHandler(item as string);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  return (
    <div className={`${s.container} ${isHover && s.hoverDrop}`} ref={dropTarget}>
      {/* <DisplayComponent />
      <OperandComponent />
      <DigitKeyboardComponent />
      <EqualsComponent /> */}
      <ContainerComponent />
    </div>
  );
};

export default ConstructorElement;
