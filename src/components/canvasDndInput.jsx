import { useState } from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { ReSize } from "../hook/reSize";
import { editText } from "../slice/globalSlice";
import { ColorOptions } from "./colorOptions";

const style = {
  position: "absolute",
  height: "1.7rem",
  width: "13rem",
  padding: "0.5rem 1rem",
  cursor: "move",
  transition: ".6s",
};
export const CanvasDndInput = ({
  id,
  left,
  top,
  text,
  heigthSize,
  widthSize,
  colorClass,
}) => {
  const [, drag] = useDrag(
    () => ({
      type: "button",
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );

  const [buttonText, setButtonText] = useState(text);
  const dispatch = useDispatch();

  const editTextHandler = (e) => {
    if (e.key === "Enter") {
      dispatch(editText({ id: id, text: buttonText }));
    }
  };

  const { incSize, decSize } = ReSize();
  return (
    <div
      className={`pointer-input`}
      ref={drag}
      style={{ ...style, left, top, height: heigthSize, width: widthSize }}
    >
      <input
        className={`text-field text-dnd ${colorClass}`}
        id="text"
        placeholder={text}
        value={buttonText}
        onKeyDown={editTextHandler}
        onChange={(e) => setButtonText(e.target.value)}
      ></input>
      <i
        className="bi bi-arrow-down-right btn-size btn-icon-dec"
        onClick={() => decSize(id, heigthSize, widthSize)}
      ></i>
      <i
        className="bi bi-arrow-down-left btn-size btn-icon-inc"
        onClick={() => incSize(id, heigthSize, widthSize)}
      ></i>
      <ColorOptions id={id} />
    </div>
  );
};
