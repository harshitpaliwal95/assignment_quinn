import { useDrag } from "react-dnd";

export const DragInput = ({ text, left, top }) => {
  const [, drag] = useDrag(() => ({
    type: "button",
    item: { text: text, id: 444, left: 0, top: 0, type: "text-field" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <div className="pointer-input" ref={drag}>
        :::
        <input
          style={{ left, top, background: "white", color: "black" }}
          className="text-field"
          placeholder={text}
        ></input>
        :::
      </div>
    </>
  );
};
