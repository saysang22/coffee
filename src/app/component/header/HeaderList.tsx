"use client";

import React from "react";
import HeaderItme from "@/model/header";
import Link from "next/link";
import style from "./HeaderList.module.scss";
import { usePathname, useRouter } from "next/navigation";

const HeaderList: React.FC<{ data: HeaderItme[] }> = ({ data }) => {
  const pathname: string | null = usePathname();

  return (
    <ul className={style.wrap}>
      {data.map((data) => {
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

export default HeaderList;
