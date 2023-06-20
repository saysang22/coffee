"use client";

import style from "./Login.module.scss";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <>
      <button className={style.button} onClick={() => signIn()}>
        로그인
      </button>
    </>
  );
};

export default Login;
