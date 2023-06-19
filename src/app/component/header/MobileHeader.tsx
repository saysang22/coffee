"use client";

import React from "react";
import style from "./MobileHeader.module.scss";
import { GiHamburgerMenu } from "react-icons/Gi";

const mobileMenuHandler = () => {
  alert("모바일메뉴버튼");
};

const MobileHeader = () => {
  return (
    <div className={style.wrap}>
      <h1>민하코</h1>
      <button onClick={mobileMenuHandler}>
        <GiHamburgerMenu className={style.icon} />
      </button>
    </div>
  );
};

export default MobileHeader;
