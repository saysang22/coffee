import React from "react";
import style from "./page.module.scss";

const page = () => {
  return (
    <section className={style.wrap}>
      <div className={style.inner}>
        <h2>푸드</h2>
      </div>
    </section>
  );
};

export default page;
export const dynamic = "force-static";
