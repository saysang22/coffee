import { GrPrevious } from "react-icons/gr";
import style from "./PrevArrow.module.scss";
import React from "react";
interface NextArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PrevArrow: React.FC = ({ onClick }: NextArrowProps) => (
  <button onClick={onClick} className={style.prev}>
    <GrPrevious />
  </button>
);

export default PrevArrow;
