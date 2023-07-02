"use client";

import React from "react";
import Button from "../common/Button";

const CartButton = () => {
  const buttonHandler = () => {
    alert("장바구니담기");
  };

  return <Button onClick={buttonHandler}>장바구니담기</Button>;
};

export default CartButton;
