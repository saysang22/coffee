import React from "react";
import style from "./page.module.scss";
import SideNav from "@/app/component/menu/SideNav";
import StoryData from "./StoryData";
import { metadata } from "@/app/layout";

metadata.title = "메뉴이야기";
metadata.description = "메뉴이야기 페이지";
const DUMMY_DATA = "스타벅스 티바나";

const page = () => {
  return (
    <section className={style.wrap}>
      <SideNav />
      <div className={style.inner}>
        <StoryData data={DUMMY_DATA} />
      </div>
    </section>
  );
};

export default page;
export const dynamic = "force-static";
