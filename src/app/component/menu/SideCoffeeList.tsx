"use client";

import { useAppSelector } from "@/redux/hooks";
import React from "react";
import Link from "next/link";
import style from "./SideCoffeeList.module.scss";

const SideCoffeeList = () => {
  const cild = useAppSelector((state) => state.coffeeSlice);
  const pathName = process.env.basePath;
  return (
    <>
      {cild.map((data) => {
        return (
          <li key={data.id} className={style.li}>
            <Link href={pathName + data.url}>{data.name}</Link>
          </li>
        );
      })}
    </>
  );
};

export default SideCoffeeList;
