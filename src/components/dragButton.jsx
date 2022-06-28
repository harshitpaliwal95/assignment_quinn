import { useState } from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { getRandom } from "../slice/globalSlice";

export const DragButton = ({ text, left, top }) => {
  const { randomId } = useSelector((state) => state.global);
  console.log(randomId);

  const dispatch = useDispatch();

  const [, drag] = useDrag(() => ({
    type: "button",
    item: { text: text, id: randomId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <button
        className="btn btn-outline"
        onMouseDown={() => dispatch(getRandom())}
        style={{ left, top }}
        ref={drag}
      >
        {text}
      </button>
    </>
  );
};
