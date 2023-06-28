"use client";

import React, { useEffect, useState } from "react";
import style from "./Event.module.scss";
import img_01 from "/public/summer_01.png";
import img_02 from "/public/summer_02.png";
import img_03 from "/public/summer_03.png";
import img_04 from "/public/summer_04.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Event = () => {
  const [mount, setMount] = useState(false);
  const router = useRouter();
  const pathName = process.env.basePath;

  useEffect(() => {
    setMount(true);
  }, []);

  const buttonHandler = () => {
    router.push(pathName + "/shop/event");
  };
  return (
    <section className={style.wrap}>
      <div className={style.wrap_inner}>
        <div className={style.text_wrap}>
          <p>SUMMER</p>
          <p>ON</p>
          <button onClick={buttonHandler}>자세히보기</button>
        </div>
        <div className={style.img_wrap}>
          <div className={style.inner}>
            <Image
              src={img_01}
              alt="라이트 키위"
              className={mount ? style.img_01_active : style.img_01}
            />
            <Image
              src={img_02}
              alt="망고 용과 레모네이드"
              className={mount ? style.img_02_active : style.img_02}
            />
            <Image
              src={img_03}
              alt="퍼플 드링크 위드 망고용과"
              className={mount ? style.img_03_active : style.img_03}
            />
            <Image
              src={img_04}
              alt="바닐라 빈 푸딩"
              className={mount ? style.img_04_active : style.img_04}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
