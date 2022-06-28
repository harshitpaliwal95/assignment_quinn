import React from "react";
import { DragButton } from "../components/dragButton";
import { DropOver } from "../components/dropOver";
import { DragInput } from "../components/dragInput";
export const HomePage = () => {
  return (
    <div className="grid-two">
      <div className="copy-comp flex-comp">
        <DragButton text={"Button"} />
        <DragInput text="text field" />
      </div>
      <DropOver />
    </div>
  );
};
