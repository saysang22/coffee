"use client";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import Link from "next/link";
import style from "./SideFoodList.module.scss";

const SideFoodList = () => {
  const child = useAppSelector((state) => state.foodSlice);

  return (
    <>
      {child.map((data) => {
        return (
          <li key={data.id} className={style.li}>
            <Link href={data.url}>{data.name}</Link>
          </li>
        );
      })}
    </>
  );
};

export default SideFoodList;
