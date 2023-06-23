"use client";

import React, { useState } from "react";
import style from "./Banner.module.scss";
import Login from "@/app/button/Login";

const Banner = () => {
  const [open, setOpen] = useState<boolean>(true);
  console.log(open);

  const openHandler = () => {
    setOpen(!open);
  };

  return (
    <div className={style.wrap}>
      <div className={open ? style.left : style.open}>
        <div className={style.text_wrap}>
          <p>MY STARBUCKS</p>
          <p>REWARDS</p>
        </div>
        <span className={style.text}>
          스타벅스만의 특별한 혜택을 더 보려면?
        </span>
        <div className={style.star}></div>
        <button onClick={openHandler}>{!open ? "Close★" : "Click★"}</button>
      </div>
      <div className={style.right}>
        <div className={style.inner}>
          <div className={style.left_text_wrap}>
            <h2>
              스타벅스만의 <span>특별한 혜택</span>, 마이 스타벅스
              <span>리워드</span>
            </h2>

            <p>
              스타벅스 회원이세요? 로그인을 통해 나만의 리워드를 확인해 보세요.
            </p>
            <p>스타벅스 회원이 아니세요? 가입을 통해 리워드 혜택을 즐기세요.</p>
          </div>
          <div className={style.button}>
            <div className={style.top}>
              <button className={style.signup}>회원가입</button>
              <Login />
            </div>
            <div className={style.bottom}>
              <button>e-Gift 선물하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
