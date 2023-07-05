"use client";

import React, { MouseEventHandler } from "react";
import style from "./Modal.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { show, add, minus } from "@/redux/features/cart";
const Modal = () => {
  console.log("모달창");

  const result = useAppSelector((state) => state.cartSlice);
  const dispatch = useAppDispatch();

  const handler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    if (e.target === e.currentTarget) {
      dispatch(show());
    }
  };

  const addHandler = () => {
    dispatch(add());
  };

  const minusHandler = () => {
    dispatch(minus());
  };
  return (
    <div className={style.wrap} onClick={handler}>
      <div className={style.inner}>
        <h2>장바구니</h2>
        <div className={style.text_wrap}>
          <span>커피이름</span>
          <div className={style.count_wrap}>
            <span className={style.val}>{result.val}</span>
            <div className={style.button_wrap}>
              <button onClick={addHandler}>+</button>
              <button onClick={minusHandler}>-</button>
            </div>
          </div>
        </div>
        <div className={style.button_wrap_01}>
          <button onClick={() => dispatch(show())}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
