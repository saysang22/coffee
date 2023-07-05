"use client";
import React from "react";
import Modal from "./Modal";
import { useAppSelector } from "@/redux/hooks";

const ModalWrap = () => {
  const result = useAppSelector((state) => state.cartSlice.status);
  return <> {result ? <Modal /> : ""}</>;
};

export default ModalWrap;
