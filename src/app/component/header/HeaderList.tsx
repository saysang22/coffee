"use client";

import React, { memo } from "react";
import Link from "next/link";
import style from "./HeaderList.module.scss";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";

const HeaderList = () => {
  const data = useAppSelector((state) => state.menuSlice);

  const pathname: string | null = usePathname();
  const pathName = process.env.basePath;

  return (
    <ul className={style.wrap}>
      {data.map((data) => {
        return (
          <li
            key={data.id}
            className={
              pathname && pathname === pathName + data.url
                ? style.active
                : style.border
            }
          >
            <Link href={data.url}>{data.title} </Link>
            <span className={style.line}></span>
            <ul>
              <li>데이터</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(HeaderList);
