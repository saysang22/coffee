"use client";
import React from "react";
import style from "./Scroll.module.scss";
import Button from "../../common/Button";
import { useRouter } from "next/navigation";

const Scroll_img = () => {
  const router = useRouter();

  const linkHandler = () => {
    router.push("/shop");
  };
  return (
    <section className={style.wrap}>
      <div className={style.inner}>
        <div className={style.text_wrap}>
          <div className={style.text_01}>
            <p>PICK YOUR FAVORITE</p>
          </div>
          <div className={style.text_02}>
            <p>다양한 메뉴를 스타벅스에서 즐겨보세요</p>
          </div>
          <div className={style.text_03}>
            <p>스타벅스만의 특별함을 경험할 수 있는 최상의 선택 음료</p>
            <p>스타벅스 커피와 완벽한 어울림을 자랑하는 푸드</p>
            <p>다양한 시도와 디자인으로 가치를 더하는 상품</p>
            <p>소중한 사람에게 마음을 전하는 가장 좋은 방법 스타벅스 카드</p>
          </div>
          <Button onClick={linkHandler}>자세히 보기</Button>
        </div>
        <span className={style.star}></span>
      </div>
    </section>
  );
};

export default Scroll_img;
