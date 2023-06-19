"use client";

import style from "./Login.module.scss";

const buttonHandler = () => {
  alert("로그인버튼");
};

const Login = () => {
  return (
    <>
      <button className={style.button} onClick={buttonHandler}>
        로그인
      </button>
    </>
  );
};

export default Login;
