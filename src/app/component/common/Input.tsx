import { InputType } from "@/model/input";
import React from "react";

const Input = ({ className, placeholder, type }: InputType) => {
  return <input className={className} placeholder={placeholder} type={type} />;
};

export default Input;
