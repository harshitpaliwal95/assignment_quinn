import { useDrag } from "react-dnd";

export const DragInput = ({ text, left, top }) => {
  const [, drag] = useDrag(() => ({
    type: "button",
    item: { text: text, id: 444, left: -10, top: 40, type: "text-field" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <label for="text-field" ref={drag}>
        :::
        <input
          style={{ left, top, background: "white", color: "black" }}
          className="text-field"
          placeholder={text}
        ></input>
        :::
      </label>
    </>
  );
};
