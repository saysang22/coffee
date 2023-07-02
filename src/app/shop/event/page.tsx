import React from "react";
import style from "./page.module.scss";
import SideNav from "@/app/component/menu/SideNav";
import { BsFacebook } from "react-icons/bs";
import img from "/public/event.jpg";
import Image from "next/image";
import Top from "@/app/component/menu/Top";
import { metadata } from "@/app/layout";

metadata.title = "이벤트";
metadata.description = "이벤트 페이지";
const page = () => {
  return (
    <section className={style.wrap}>
      <SideNav />
      <div className={style.inner}>
        <Top name="이벤트" />
        <div className={style.text_wrap}>
          <div className={style.left}>
            <h3>SUMMER ph1 프로모션</h3>
            <span>2023-05-03 ~ 2023-07-10</span>
          </div>
          <div className={style.right}>
            <BsFacebook className={style.icon} />
          </div>
        </div>
        <div className={style.image_wrap}>
          <Image src={img} alt="이벤트포스터" className={style.img} />
        </div>
      </div>
    </section>
  );
};

export default page;
export const dynamic = "force-static";
