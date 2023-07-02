"use client";

import React, { useState } from "react";
import style from "./MenuList.module.scss";
import DataType from "@/model/dataType";
import Link from "next/link";

const MenuList: React.FC<{ result: DataType[] }> = ({ result }) => {
  const [isHoverId, setIsHoverId] = useState<string | null>(null);

  const mouseEnter = (id: string) => {
    setIsHoverId(id);
  };

  const mouseLeave = () => {
    setIsHoverId(null);
  };

  const type = result.filter((data) => {
    return data.type === "샌드위치&샐러드";
  });

  const pathName = process.env.pasePath;

  return (
    <ul className={style.ul}>
      {type.map((list) => {
        const isHover = isHoverId === list._id.toString();
        const className = isHover ? style.active : "";

        return (
          <Link
            href={`/detail/${list._id.toString()}`}
            key={list._id.toString()}
          >
            <li>
              <div className={style.img_wrap}>
                <img
                  src={pathName + list.img}
                  alt={list.title}
                  onMouseEnter={() => mouseEnter(list._id.toString())}
                  onMouseLeave={mouseLeave}
                  className={className}
                />
              </div>
              <div className={style.text_wrap}>{list.title}</div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default MenuList;
