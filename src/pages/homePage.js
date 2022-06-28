import React from "react";
import { DragButton } from "../components/dragButton";
import { DropOver } from "../components/dropOver";

export const HomePage = () => {
  return (
    <div className="grid-two">
      <div className="copy-comp">
        <DragButton text={"Button"} />
      </div>
      <DropOver />
    </div>
  );
};
