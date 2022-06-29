import React from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../slice/globalSlice";

export const ChangeColor = ({ id }) => {
  const colors = [
    "color-purple",
    "color-red",
    "color-bluesh",
    "color-white",
    "color-black",
  ];
  const dispatch = useDispatch();
  const colorHandler = (item) => {
    dispatch(changeColor({ id, colorClass: item }));
  };
  return (
    <div className="color-pane">
      {colors.map((item) => (
        <span
          key={item}
          className={`color ${item}`}
          onClick={() => colorHandler(item)}
        ></span>
      ))}
    </div>
  );
};
