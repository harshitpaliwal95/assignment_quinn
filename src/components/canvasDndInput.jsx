import { useState } from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { editText } from "../slice/globalSlice";

const style = {
  position: "absolute",
  minHeight: "1rem",
  color: "white",
  padding: "0.5rem 1rem",
  cursor: "move",
};
export const CanvasDndInput = ({ id, left, top, text }) => {
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

  return (
    <label for="text-field" ref={drag} style={{ ...style, left, top }}>
      :::
      <input
        className="text-field"
        placeholder={text}
        value={buttonText}
        onKeyDown={editTextHandler}
        onChange={(e) => setButtonText(e.target.value)}
      ></input>
      :::
    </label>
  );
};
