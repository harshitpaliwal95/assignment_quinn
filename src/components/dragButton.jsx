import { useDrag } from "react-dnd";

export const DragButton = ({ text, left, top }) => {
  const [, drag] = useDrag(() => ({
    type: "button",
    item: { text: text, id: 444, left: 10, top: 0 },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <button className="btn btn-outline" style={{ left, top }} ref={drag}>
        {text}
      </button>
    </>
  );
};
