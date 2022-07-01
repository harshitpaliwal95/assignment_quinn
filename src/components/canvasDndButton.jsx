import { useState } from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { ReSize } from "../hook/reSize";
import { editText } from "../slice/globalSlice";
import { ColorOptions } from "./colorOptions";

const style = {
  position: "absolute",
  width: "13rem",
  height: "4rem",
  padding: "0.5rem 1rem",
  cursor: "move",
};

export const CanvasDndButton = ({
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
  const [inputEdit, setInputEdit] = useState(false);
  const [buttonText, setButtonText] = useState(text);
  const dispatch = useDispatch();

  const editTextHandler = (e) => {
    if (e.key === "Enter") {
      dispatch(editText({ id: id, text: buttonText }));
      setInputEdit(false);
    }
  };
  const { incSize, decSize } = ReSize();

  return (
    <button
      className={`box btn dnd-btn ${colorClass}`}
      onDoubleClick={() => setInputEdit(true)}
      ref={drag}
      style={{ ...style, left, top, height: heigthSize, width: widthSize }}
      data-testid="box"
    >
      {buttonText}
      {inputEdit && (
        <input
          type="text"
          className="edit-text"
          placeholder="edit text"
          value={buttonText}
          onChange={(e) => setButtonText(e.target.value)}
          onKeyDown={(e) => editTextHandler(e)}
        ></input>
      )}
      <i
        className="bi bi-arrow-down-left btn-size btn-icon-dec"
        onClick={() => decSize(id, heigthSize, widthSize)}
      ></i>
      <i
        className="bi bi-arrow-down-right btn-size btn-icon-inc"
        onClick={() => incSize(id, heigthSize, widthSize)}
      ></i>
      <ColorOptions id={id} />
    </button>
  );
};
