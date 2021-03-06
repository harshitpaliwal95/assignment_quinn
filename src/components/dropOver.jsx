import { useCallback } from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePosition } from "../slice/globalSlice";
import { CanvasDndButton } from "./canvasDndButton";
import { CanvasDndInput } from "./canvasDndInput";

export const DropOver = () => {
  const { canvasItem } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  const moveBox = useCallback(
    (id, left = 2, top = 0, type) => {
      dispatch(updatePosition({ id, top, left, type }));
    },
    [dispatch]
  );

  const [, drop] = useDrop(
    () => ({
      accept: "button",
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top, item.type);
        return undefined;
      },
    }),
    [moveBox]
  );

  const navigate = useNavigate();

  const saveStateHandler = () => {
    setTimeout(() => {
      navigate(`/item/11`);
    }, 500);
  };

  return (
    <div ref={drop} className={`canvas`}>
      {canvasItem.map((item) =>
        item.type === "button" ? (
          <CanvasDndButton
            key={item.id}
            id={item.id}
            left={item.left}
            top={item.top}
            text={item.title}
            type={item.type}
            heigthSize={item.height}
            widthSize={item.width}
            colorClass={item.colorClass}
          />
        ) : (
          <CanvasDndInput
            key={item.id}
            id={item.id}
            left={item.left}
            top={item.top}
            text={item.title}
            type={item.type}
            heigthSize={item.height}
            widthSize={item.width}
            colorClass={item.colorClass}
          />
        )
      )}
      <div className="top-btn">
        <button className="btn btn-outline" onClick={() => saveStateHandler()}>
          Save State
        </button>
      </div>
    </div>
  );
};
