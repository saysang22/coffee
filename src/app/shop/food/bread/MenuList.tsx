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
    return data.type === "브레드";
  });

  return (
    <ul className={style.ul}>
      {type.map((list) => {
        const isHover = isHoverId === list._id.toString();
        const className = isHover ? style.active : "";

        return (
          <Link href={`/detail/${list._id}`} key={list._id.toString()}>
            <li>
              <div className={style.img_wrap}>
                <img
                  src={list.img}
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
