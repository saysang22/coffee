"use client";
import Top from "@/app/component/menu/Top";
import React from "react";
import style from "./StoryData.module.scss";
import img from "/public/story_text.png";
import Image from "next/image";

const StoryData: React.FC<{ data: string }> = ({ data }) => {
  return (
    <div className={style.inner}>
      <Top name={data} />
      <div className={style.bg_wrap}>
        <div className={style.img}>
          <Image src={img} alt="스타벅스 티바나" width={300} />
        </div>
      </div>
      <div className={style.text_wrap}>
        <h3>STARBUCKS TEAVANA™</h3>
        <p>
          모든 사람들이 함께 즐기는 새로운 스타일의 티 브랜드, 스타벅스 티바나
        </p>
        <div className={style.top}>
          <p>
            스타벅스 티바나는 "Heaven of Tea"를 콘셉트로 1997년 애틀란타에서 첫
            매장을 오픈하였습니다.
          </p>
          <p>격식을 갖추어 어렵고 복잡하게만 느껴졌던 티가 아닌,</p>
          <p>모두가 자유롭게 즐길 수 있는 새로운 맞과 향의 티를 선보입니다.</p>
        </div>
        <div className={style.bottom}>
          <p>
            다양한 타입의 찻잎과 개성 있는 재료들을 통해 소개하는 새로운
            스타일의 티 음료를
          </p>
          <p>지금 바로 스타벅스 티바나에서 만나 보세요.</p>
        </div>
      </div>
    </div>
  );
};

export default StoryData;
