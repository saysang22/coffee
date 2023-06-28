"use client";

import { CoffeeType } from "@/model/coffee";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import SideCoffeeList from "./SideCoffeeList";
import SideFoodList from "./SideFoodList";
import style from "./SideList.module.scss";
import Link from "next/link";

const SideList: React.FC<{ DUMMY_DATA: CoffeeType[] }> = ({ DUMMY_DATA }) => {
  let show;
  const [test, setTest] = useState(show);
  const [test1, setTest1] = useState(show);
  const [test2, setTest2] = useState(show);
  const [test3, setTest3] = useState(show);

  const buttonHandler = (name: string, status: boolean) => {
    show = status;

    if (name === "이벤트") {
      setTest(!test);
    }

    if (name === "음료") {
      setTest1(!test1);
    }
    if (name === "푸드") {
      setTest2(!test2);
    }

    if (name === "메뉴이야기") {
      setTest3(!test3);
    }
  };

  return (
    <>
      {DUMMY_DATA.map((data) => {
        return (
          <li key={data.id} className={style.li}>
            <button
              className={style.button}
              onClick={() => {
                return buttonHandler(data.name, data.status);
              }}
            >
              {data.name}
              <BiChevronDown />
            </button>
            {data.name === "이벤트" && test === true ? (
              <ul>
                <li className={style.child}>
                  <Link href={data.url}>이벤트</Link>
                </li>
              </ul>
            ) : (
              ""
            )}
            {data.name === "음료" && test1 === true ? (
              <ul>
                <SideCoffeeList />
              </ul>
            ) : (
              ""
            )}
            {data.name === "푸드" && test2 === true ? (
              <ul>
                <SideFoodList />
              </ul>
            ) : (
              ""
            )}
            {data.name === "메뉴이야기" && test3 === true ? (
              <ul>
                <li className={style.child}>
                  <Link href={data.url}>메뉴 이야기</Link>
                </li>
              </ul>
            ) : (
              ""
            )}
          </li>
        );
      })}
    </>
  );
};

export default SideList;
