"use client";

import React from "react";
import style from "./Top.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { GrNext } from "react-icons/gr";

const Top = ({ name }) => {
  const pathname: string | null = usePathname();
  console.log(pathname);

  const pathName = process.env.basePath;

  const data = useAppSelector((state) => state.sideMenuSlice);

  return (
    <div className={style.top}>
      <h1>{name}</h1>
      <div className={style.small_path}>
        <Link href="/">
          <AiOutlineHome className={style.homeIcon} />
        </Link>
        <GrNext className={style.nextIcon} />
        {data.map((data) => {
          return pathname && pathname === pathName + data.url ? (
            <Link href={data.url} key={data.id}>
              <p>{data.name}</p>
            </Link>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default Top;
