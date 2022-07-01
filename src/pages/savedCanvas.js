import { useSelector } from "react-redux";
import { CanvasDndButton } from "../components/canvasDndButton";
import { useNavigate } from "react-router-dom";
import { CanvasDndInput } from "../components/canvasDndInput";

export const SavedCanvas = () => {
  const { canvasItem } = useSelector((state) => state.global);

  const navigate = useNavigate();

  return (
    <div className="grid-two saved-canvas">
      <div className="copy-comp flex-comp">
        <h1 onClick={() => navigate("/")}>Saved State -</h1>
      </div>
      <div className={`saved-state-canvas`}>
        {canvasItem.map((item) =>
          item.type === "button" ? (
            <CanvasDndButton
              key={item.id}
              id={item.id}
              left={item.left}
              top={item.top}
              text={item.title}
              type={item.type}
              heigthSize={item.height}
              widthSize={item.width}
              colorClass={item.colorClass}
            />
          ) : (
            <CanvasDndInput
              key={item.id}
              id={item.id}
              left={item.left}
              top={item.top}
              text={item.title}
              type={item.type}
              heigthSize={item.height}
              widthSize={item.width}
              colorClass={item.colorClass}
            />
          )
        )}
      </div>
    </div>
  );
};
