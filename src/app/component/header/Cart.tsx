"use client";

import React from "react";
import { IoMdBasket } from "react-icons/io";
import style from "./Cart.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { show } from "@/redux/features/cart";

const Cart = () => {
  const result = useAppSelector((state) => state.cartSlice);
  const dispatch = useAppDispatch();
  const cartButtonHandler = () => {
    dispatch(show());
  };
  console.log(result.status);

  return (
    <div className={style.wrap}>
      <button onClick={cartButtonHandler}>
        <IoMdBasket className={style.icon} />
      </button>
      <span>{result.val}개</span>
    </div>
  );
};

export default Cart;
