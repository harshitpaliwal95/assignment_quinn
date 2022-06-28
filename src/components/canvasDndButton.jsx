import { useState } from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { editText, reSizeComp } from "../slice/globalSlice";

const style = {
  position: "absolute",
  backgroundColor: "white",
  width: "13rem",
  height: "4rem",
  color: "black",
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

  const [height, setHeight] = useState(heigthSize);
  const [width, setWidth] = useState(widthSize);
  const getNumber = (item) => {
    let number = item.replace("rem", "");
    return Number(number);
  };

  const incSize = () => {
    let numberHeight = getNumber(height);
    let numberWidth = getNumber(width);
    setHeight(() => `${numberHeight + 0.3}rem`);
    setWidth(() => `${numberWidth + 0.8}rem`);
    setTimeout(() => {
      dispatch(reSizeComp({ id, height, width }));
    }, 1000);
  };
  const decSize = () => {
    let numberHeight = getNumber(height);
    let numberWidth = getNumber(width);
    setHeight(() => `${numberHeight - 0.3}rem`);
    setWidth(() => `${numberWidth - 0.8}rem`);
    setTimeout(() => {
      dispatch(reSizeComp({ id, height, width }));
    }, 1000);
  };

  return (
    <button
      className="box btn dnd-btn"
      onDoubleClick={() => setInputEdit(true)}
      ref={drag}
      style={{ ...style, left, top, height, width }}
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
        onClick={decSize}
      ></i>
      <i
        className="bi bi-arrow-down-right btn-size btn-icon-inc"
        onClick={incSize}
      ></i>
    </button>
  );
};
