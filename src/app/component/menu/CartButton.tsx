"use client";

import React from "react";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { add } from "@/redux/features/cart";

const CartButton = () => {
  const dispatch = useDispatch();

  const buttonHandler = () => {
    dispatch(add());
  };

  return <Button onClick={buttonHandler}>장바구니담기</Button>;
};

export default CartButton;
