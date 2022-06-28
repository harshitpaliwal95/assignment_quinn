import { useDrag } from "react-dnd";

const style = {
  position: "absolute",
  //   border: "1px dashed gray",
  backgroundColor: "white",
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

  return (
    <div
      className="box btn"
      ref={drag}
      style={{ ...style, left, top }}
      data-testid="box"
    >
      {"button"}
    </div>
  );
};
