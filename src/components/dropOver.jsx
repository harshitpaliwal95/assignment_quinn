import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { CanvasDnd } from "./canvasDnd";
import { DragButton } from "./dragButton";

export const DropOver = () => {
  const [boxes, setBoxes] = useState([
    { id: 0, top: 20, left: 80, title: "Drag me around" },
    { id: 1, top: 180, left: 20, title: "Drag me too" },
  ]);
  const basicArr = boxes;
  const moveBox = useCallback(
    (id, left = 2, top = 0) => {
      const findItem = boxes.find((item) => item.id === id);
      if (findItem) {
        setBoxes((boxes) =>
          boxes.map((item) => {
            const newObj = Object.assign({}, item);
            if (newObj.id === id) {
              newObj["top"] = top;
              newObj["left"] = left;
            }
            return newObj;
          })
        );
      } else {
        setBoxes((boxes) => [
          ...boxes,
          { id: id, top: top, left: left, title: "Drag me too" },
        ]);
      }
    },
    [boxes, setBoxes]
  );
  const [, drop] = useDrop(
    () => ({
      accept: "button",
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );
  console.log(boxes);
  return (
    <div ref={drop} className="canvas">
      {boxes.map((item) => (
        <CanvasDnd
          key={item.id}
          id={item.id}
          left={item.left}
          top={item.top}
          text={item.text}
        />
      ))}
    </div>
  );
};
