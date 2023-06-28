import React from "react";
import style from "./SideNav.module.scss";
import { CoffeeType } from "@/model/coffee";
import SideList from "./SideList";

const DUMMY_DATA: CoffeeType[] = [
  { id: 0, name: "이벤트", url: "/shop/event", status: false },
  { id: 1, name: "음료", url: "/shop/drink", status: false },
  { id: 2, name: "푸드", url: "/shop/food", status: false },
  { id: 3, name: "메뉴이야기", url: "/shop/story", status: false },
];
const SideNav = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <SideList DUMMY_DATA={DUMMY_DATA} />
      </ul>
    </nav>
  );
};

export default SideNav;
