"use client";
import React, { useEffect, useState } from "react";
import style from "./Video.module.scss";
import Image from "next/image";
import coffee from "/public/ice_coffee.png";
import Button from "../../common/Button";
import { useRouter } from "next/navigation";

let VIDEO_ADDRESS = process.env.VIDEO_ADDRESS;

const Video = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const router = useRouter();

  const buttonHandler = () => {
    router.push("/shop/event");
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY || document.documentElement.scrollTop;

      const val = 500;

      if (scrollHeight >= val) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={style.wrap}>
      <div className={style.inner}>
        <div className={style.img_wrap}>
          <Image
            src={coffee}
            alt="ice_coffee"
            className={isScrolled ? style.img_animation : style.img}
          />
        </div>
        <div className={style.text_wrap}>
          <div className={isScrolled ? style.text_animation : style.text_inner}>
            <p>상쾌하게 여름을 반겨줄 시즌 원드</p>
            <h3>아이스 커피 블렌드</h3>
            <div className={style.bottom}>
              <p>
                아프리카와 라틴 아메리카 커피의 블렌드로 시트러스함과 은은한
                캐러멜 향을
              </p>
              <p>
                동시에 느낄 수 있으며, 차갑게 즐길 때 풍미가 더욱 깊어지는
                원두입니다.
              </p>
              <Button onClick={buttonHandler}>자세히 보기</Button>
            </div>
          </div>
        </div>
      </div>
      <video loop autoPlay muted>
        <source src={VIDEO_ADDRESS} />
      </video>
    </section>
  );
};

export default Video;
