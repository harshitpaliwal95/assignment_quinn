import { useDrag } from "react-dnd";

export const DragButton = ({ text }) => {
  const [, drag] = useDrag(() => ({
    type: "image",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <>
      <button className="btn btn-outline" ref={drag}>
        {text}
      </button>
    </>
  );
};
