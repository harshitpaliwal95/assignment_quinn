import { useDispatch } from "react-redux";
import { reSizeComp } from "../slice/globalSlice";

export const ReSize = () => {
  const dispatch = useDispatch();

  const getNumber = (item) => {
    let number = item.replace("rem", "");
    return Number(number);
  };

  const incSize = (id, heigthSize, widthSize) => {
    let height = getNumber(heigthSize);
    let width = getNumber(widthSize);
    height = `${height + 0.3}rem`;
    width = `${width + 0.8}rem`;
    dispatch(reSizeComp({ id, height, width }));
  };
  const decSize = (id, heigthSize, widthSize) => {
    let height = getNumber(heigthSize);
    let width = getNumber(widthSize);
    height = `${height - 0.3}rem`;
    width = `${width - 0.8}rem`;
    dispatch(reSizeComp({ id, height, width }));
  };
  return { incSize, decSize };
};
