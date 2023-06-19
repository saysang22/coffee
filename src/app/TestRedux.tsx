//src/app/TestRedux.tsx
"use client";

import {
  add,
  addPayload,
  remove,
  removePayload,
  reset,
} from "@/redux/features/counterSlice";
import style from "./TestRedux.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function TestRedux() {
  const counter = useAppSelector((state) => state.counterSlice.value);
  const dispatch = useAppDispatch();

  const resetHandler = () => {
    dispatch(reset());
  };

  const addHandler = () => {
    dispatch(add());
  };

  const removeHandler = () => {
    dispatch(remove());
  };

  const payloadAddHandler = () => {
    dispatch(addPayload(10));
  };

  const payloadRemoveHandler = () => {
    dispatch(removePayload(10));
  };
  return (
    <div className={style.wrap}>
      <div className={style.button_wrap}>
        <button onClick={resetHandler}>리셋버튼</button>
        <button onClick={addHandler}>더하기버튼</button>
        <button onClick={removeHandler}>빼기버튼</button>
        <button onClick={payloadAddHandler}>payload 더하기 버튼</button>
        <button onClick={payloadRemoveHandler}>payload 빼기 버튼</button>
      </div>
      <p>{counter}</p>
    </div>
  );
}
