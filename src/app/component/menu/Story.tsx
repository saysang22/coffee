"use client";
import React from "react";
import style from "./Story.module.scss";

const Story = () => {
  const buttonHandler = () => {
    alert("자세히보기");
  };
  return (
    <section className={style.wrap}>
      <div className={style.inner}>
        <h3>메뉴 이야기</h3>
        <div className={style.top}>
          <p>스타벅스에서 만나는 다양한 음료 이야기</p>
        </div>
        <div className={style.bottom}>
          <p>스타벅스에서만 경험할 수 있는 특별한 메뉴를 소개합니다.</p>
        </div>
        <div className={style.button_wrap}>
          <button onClick={buttonHandler}>자세히 보기</button>
        </div>
      </div>
    </section>
  );
};

export default Story;
