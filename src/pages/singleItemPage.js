import React from "react";
import { useSelector } from "react-redux";

export const SingleItemPage = () => {
  const { signleItem } = useSelector((state) => state.global);
  return <div className="single-item">{signleItem}</div>;
};
