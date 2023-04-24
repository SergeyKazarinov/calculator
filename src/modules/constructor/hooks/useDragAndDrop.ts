
import { useDrag, useDrop } from 'react-dnd';
import { useAppDispatch } from 'services';
import { calcElementsActions } from 'services/slices/calcElementsSlice';
import CalcElementsEnum from 'types/calcElementsEnum';

const useDragAndDrop = (accept: string, type: string, id: string) => {
  const dispatch = useAppDispatch();
  const [{isHover, getItem}, dropTarget] = useDrop({
    accept,
    drop(item: {id: string}) {
      if (item.id === CalcElementsEnum.DISPLAY) {
        dispatch(calcElementsActions.setDisplay(true));
      } else {
        dispatch(calcElementsActions.setCalcElement({id: item.id, arrayId: id}));
      }
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
      getItem: monitor.getItem(),
    })
  });

  const [{isDrag}, dragRef] = useDrag({
    type,
    item: {id},
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });
  return {isHover, getItem, dropTarget, dragRef, isDrag};
};

export default useDragAndDrop;