"use client";

import React, { useCallback } from "react";
import { signOut } from "next-auth/react";
import style from "./Login.module.scss";

const Logout = () => {
  console.log("로그아웃버튼");

  const handler = useCallback(() => {
    signOut();
  }, []);
  return (
    <button className={style.button} onClick={handler}>
      로그아웃
    </button>
  );
};

export default Logout;
