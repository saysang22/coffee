"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img_01 from "/public/slide_01.jpg";
import img_02 from "/public/slide_02.jpg";
import img_03 from "/public/slide_03.jpg";
import style from "./Slide.module.scss";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Button from "../../common/Button";

const Slide = () => {
  const img = [
    { id: 0, name: img_01, description: "썸머 프로모션" },
    { id: 1, name: img_02, description: "리저브 서머 커피&원두 출시" },
    { id: 2, name: img_03, description: "만원 별 이벤트" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className={style.wrap}>
      <Slider {...settings} className={style.slider}>
        {img.map((img) => {
          return (
            <div key={img.id}>
              <Image src={img.name} alt={img.description} />
              <Button
                onClick={() => {
                  alert("자세히보기");
                }}
                className={style.button}
              >
                자세히보기!
              </Button>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Slide;
