"use client";
import React from "react";
import style from "./Food.module.scss";

const Food = () => {
  const buttonHandler = () => {
    alert("자세히 보기");
  };
  return (
    <section className={style.wrap}>
      <div className={style.inner_wrap}>
        <div className={style.text_wrap}>
          <div className={style.inner}>
            <h3>푸드</h3>
            <div className={style.top}>
              <p>신선한 식재료로 만든 다양한 푸드를 소개합니다.</p>
            </div>
            <div className={style.bottom}>
              <p>간편하면서 영양 가득한 스타벅스 푸드가 당신의 완벽한 하루를</p>
              <p>채워 드립니다.</p>
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

export default Food;
