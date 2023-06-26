"use client";

import React from "react";
import { IoMdBasket } from "react-icons/io";
import style from "./Cart.module.scss";

const cartButtonHandler = () => {
  alert("카트버튼");
};

const Cart = () => {
  return (
    <div className={style.wrap}>
      <button onClick={cartButtonHandler}>
        <IoMdBasket className={style.icon} />
      </button>
      <span>10</span>
    </div>
  );
};

export default Cart;
