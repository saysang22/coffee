"use client";

import React from "react";
import style from "./HeaderInput.module.scss";
import { RiSearchLine } from "react-icons/ri";
import Button from "../common/Button";
import Input from "../common/Input";

const buttonHandler = () => {
  alert("검색버튼");
};

const HeaderInput = () => {
  return (
    <div className={style.wrap}>
      <Input type="text" placeholder="검색어를 입력하세요" />
      <Button onClick={buttonHandler}>
        <RiSearchLine className={style.icon} />
      </Button>
    </div>
  );
};

export default HeaderInput;
