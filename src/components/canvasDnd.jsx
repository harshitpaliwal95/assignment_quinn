import { useState } from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSingleItem } from "../slice/globalSlice";

const style = {
  position: "absolute",
  backgroundColor: "white",
  minHeight: "1rem",
  color: "black",
  padding: "0.5rem 1rem",
  cursor: "move",
};
export const CanvasDnd = ({ id, left, top, text }) => {
  const [{ isDragging }, drag] = useDrag(
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
  const inputHandler = () => {
    setInputEdit(true);
  };
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const navigateHandler = () => {
    dispatch(setSingleItem(buttonText));
    navigate(`/item/${id}`);
  };
  return (
    <button
      className="box btn dnd-btn"
      onClick={() => inputHandler()}
      onDoubleClick={() => navigateHandler()}
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
          onKeyDown={(e) => e.key === "Enter" && setInputEdit(false)}
        ></input>
      )}
    </button>
  );
};
