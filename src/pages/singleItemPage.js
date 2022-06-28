import { useSelector, useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { CanvasDnd } from "../components/canvasDnd";
import { useNavigate } from "react-router-dom";

export const SingleItemPage = () => {
  const { singleItem } = useSelector((state) => state.global);
  console.log(singleItem);
  const [button, setButton] = useState(singleItem);

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

  const navigate = useNavigate();
  return (
    <div className={`saved-state`}>
      <button className="btn btn-outline" onClick={() => navigate("/")}>
        Home
      </button>
      <div ref={drop} className={`saved-state-canvas`}>
        {button.map((item) => (
          <CanvasDnd
            key={item.id}
            id={item.id}
            left={item.left}
            top={item.top}
            text={item.title}
          />
        ))}
      </div>
    </div>
  );
};
