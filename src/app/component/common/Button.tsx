"use client";
import { ButtonType } from "@/model/button";
import React from "react";

const Button = ({ onClick, className, children }: ButtonType) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
