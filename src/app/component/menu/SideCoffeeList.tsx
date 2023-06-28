"use client";

import { useAppSelector } from "@/redux/hooks";
import React from "react";
import Link from "next/link";
import style from "./SideCoffeeList.module.scss";

const SideCoffeeList = () => {
  const cild = useAppSelector((state) => state.coffeeSlice);
  return (
    <>
      {cild.map((data) => {
        return (
          <li key={data.id} className={style.li}>
            <Link href={data.url}>{data.name}</Link>
          </li>
        );
      })}
    </>
  );
};

export default SideCoffeeList;
