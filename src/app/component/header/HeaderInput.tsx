"use client";

import React from "react";
import style from "./HeaderInput.module.scss";
import { RiSearchLine } from "react-icons/Ri";

const buttonHandler = () => {
  alert("검색버튼");
};

const HeaderInput = () => {
  return (
    <div className={style.wrap}>
      <input type="text" placeholder="검색어를 입력하세요" />
      <button onClick={buttonHandler}>
        <RiSearchLine className={style.icon} />
      </button>
    </div>
  );
};

export default HeaderInput;
