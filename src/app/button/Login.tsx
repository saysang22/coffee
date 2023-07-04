"use client";

import { useCallback, useEffect } from "react";
import style from "./Login.module.scss";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  console.log("로그인버튼");

  const handler = useCallback(() => {
    signIn();
  }, []);

  return (
    <>
      <button className={style.button} onClick={handler}>
        로그인
      </button>
    </>
  );
};

export default Login;
