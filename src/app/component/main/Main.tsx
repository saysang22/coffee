"use client";

import React, { useState } from "react";
import style from "./Main.module.scss";
import img_01 from "/public/coffee_02.png";
import img_02 from "/public/coffee_03.png";
import img_03 from "/public/coffee_04.png";
import img_04 from "/public/coffee_01_b.png";
import main_title from "/public/main_title.png";
import Image from "next/image";

const Main = () => {
  const [brHeight, setBrHeight] = useState<number>(0);

  return (
    <div className={style.main}>
      <div className={style.wrap}>
        <Image src={main_title} alt="DELIGHTFUL" />
        <button>자세히보기</button>
        <Image src={img_04} alt="커피이미지" className={style.img_04} />
      </div>
      <Image
        src={img_01}
        alt="coffee"
        className={`${style.img_01} ${style.img}`}
      />
      <Image
        src={img_02}
        alt="coffee"
        className={`${style.img_02} ${style.img}`}
      />
      <Image
        src={img_03}
        alt="coffee"
        className={`${style.img_03} ${style.img}`}
      />
    </div>
  );
};

export default Main;
