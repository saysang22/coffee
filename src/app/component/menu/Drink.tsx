"use client";

import React from "react";
import style from "./Drink.module.scss";

const Drink = () => {
  const buttonHandler = () => {
    alert("자세히 보기");
  };
  return (
    <section className={style.wrap}>
      <div className={style.inner_wrap}>
        <div className={style.text_wrap}>
          <div className={style.inner}>
            <h3>음료</h3>
            <div className={style.top}>
              <p>바리스타의 숙련된 기술로 취향까지 담은 음료를</p>
              <p>경험해 보세요</p>
            </div>
            <div className={style.bottom}>
              <p>한 잔의 음료에 원하시는 취향과 스타벅스 경험까지</p>
              <p>모두 담았습니다.</p>
            </div>
            <div className={style.button_wrap}>
              <button onClick={buttonHandler}>자세히 보기</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drink;
