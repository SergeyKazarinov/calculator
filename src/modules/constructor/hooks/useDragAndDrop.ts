
import { useDrag, useDrop } from 'react-dnd';

const useDragAndDrop = (accept: string, type: string, id: string) => {
  const [{isHover}, dropTarget] = useDrop({
    accept,
    drop(item: {id: string}) {
      console.log(item);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    })
  });

  const [, dragRef] = useDrag({
    type,
    item: {id}
  });
  return {isHover, dropTarget, dragRef};
};

export default useDragAndDrop;