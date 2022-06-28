import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { CanvasDnd } from "./canvasDnd";

export const DropOver = () => {
  const [button, setButton] = useState([
    { id: 0, top: 20, left: 80, title: "Drag me around" },
    { id: 1, top: 180, left: 20, title: "Drag me too" },
  ]);

  const moveBox = useCallback(
    (id, left = 2, top = 0) => {
      const findItem = button.find((item) => item.id === id);
      if (findItem) {
        setButton((button) =>
          button.map((item) => {
            const newObj = Object.assign({}, item);
            if (newObj.id === id) {
              newObj["top"] = top;
              newObj["left"] = left;
            }
            return newObj;
          })
        );
      } else {
        setButton((button) => [
          ...button,
          {
            id: button.length + 1,
            top: top,
            left: left,
            title: "Double-Click",
          },
        ]);
      }
    },
    [button, setButton]
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
  const canvasColorArr = ["purple", "red", "bluesh", "white", "black"];
  const [canvasColor, setCanvasColor] = useState(null);

  return (
    <div ref={drop} className={`canvas color-${canvasColor}`}>
      {button.map((item) => (
        <CanvasDnd
          key={item.id}
          id={item.id}
          left={item.left}
          top={item.top}
          text={item.title}
        />
      ))}
      <div className="color-box">
        {canvasColorArr.map((item) => (
          <span
            className={`color color-${item}`}
            onClick={() => setCanvasColor(item)}
          ></span>
        ))}
      </div>
    </div>
  );
};
