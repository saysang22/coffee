"use client";

import React, { memo } from "react";
import HeaderItme from "@/model/header";
import Link from "next/link";
import style from "./HeaderList.module.scss";
import { usePathname } from "next/navigation";

const HeaderList: React.FC<{ data: HeaderItme[] }> = ({ data }) => {
  const pathname: string | null = usePathname();
  console.log("헤더리스트", pathname);

  return (
    <ul className={style.wrap}>
      {data.map((data) => {
        console.log("pathname", data.url);

        return (
          <li
            key={data.id}
            className={
              pathname && pathname === data.url ? style.active : style.border
            }
          >
            <Link href={data.url}>{data.title} </Link>
            <span className={style.line}></span>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(HeaderList);
