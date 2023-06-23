"use client";
import React from "react";
import style from "./NextArrow.module.scss";
import { GrNext } from "react-icons/Gr";

interface NextArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NextArrow: React.FC = ({ onClick }: NextArrowProps) => {
  return (
    <button onClick={onClick} className={style.next}>
      <GrNext className={style.icon} />
    </button>
  );
};

export default NextArrow;
