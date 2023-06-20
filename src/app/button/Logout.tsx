"use client";

import React from "react";
import { signOut } from "next-auth/react";
import style from "./Login.module.scss";

const Logout = () => {
  return (
    <button className={style.button} onClick={() => signOut()}>
      로그아웃
    </button>
  );
};

export default Logout;
