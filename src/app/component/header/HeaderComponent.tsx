import React from "react";
import HeaderItme from "@/model/header";
import HeaderList from "./HeaderList";
import style from "./HeaderComponent.module.scss";
import HeaderInput from "./HeaderInput";
import Login from "@/app/button/Login";
import Cart from "./Cart";
import MobileHeader from "./MobileHeader";

const HeaderComponent: React.FC<{ data: HeaderItme[] }> = ({ data }) => {
  return (
    <div className={style.wrap}>
      <div className={style.inner}>
        <div className={style.left}>
          <div className={style.logo}>민하코</div>
          <HeaderList data={data} />
        </div>
        <div className={style.rigth}>
          <HeaderInput />
          <div className={style.info_wrap}>
            <Login />
            <span>saysang22님</span>
            <Cart />
          </div>
        </div>
      </div>
      <div className={style.mobile}>
        <MobileHeader />
      </div>
    </div>
  );
};

export default HeaderComponent;
