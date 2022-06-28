import { useState } from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { editText } from "../slice/globalSlice";

const style = {
  position: "absolute",
  backgroundColor: "white",
  minHeight: "1rem",
  color: "black",
  padding: "0.5rem 1rem",
  cursor: "move",
};
export const CanvasDndButton = ({ id, left, top, text }) => {
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

  return (
    <button
      className="box btn dnd-btn"
      onDoubleClick={() => setInputEdit(true)}
      ref={drag}
      style={{ ...style, left, top }}
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
    </button>
  );
};
