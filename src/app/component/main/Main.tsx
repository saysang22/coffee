"use client";

import React, { useEffect, useState } from "react";
import style from "./Main.module.scss";
import img_01 from "/public/coffee_02.png";
import img_02 from "/public/coffee_03.png";
import img_03 from "/public/coffee_04.png";
import img_04 from "/public/coffee_01_b.png";
import main_title from "/public/main_title.png";
import Image from "next/image";
import Button from "../common/Button";
import { useRouter } from "next/navigation";

const Main = () => {
  const [mount, setMount] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setMount(true);
  }, []);

  const buttonHandler = () => {
    router.push("/shop/event");
  };
  return (
    <section className={style.main}>
      <div className={style.wrap}>
        <Image src={main_title} alt="DELIGHTFUL" />
        <Button onClick={buttonHandler}>자세히 보기</Button>
        <Image src={img_04} alt="커피이미지" className={style.img_04} />
      </div>
      <Image
        src={img_01}
        alt="coffee"
        className={mount ? style.img_01 : style.img_start}
      />
      <Image
        src={img_02}
        alt="coffee"
        className={mount ? style.img_02 : style.img_start}
      />
      <Image
        src={img_03}
        alt="coffee"
        className={mount ? style.img_03 : style.img_start}
      />
    </section>
  );
};

export default Main;
