import Event from "../component/menu/Event";
import Top from "../component/menu/Top";
import style from "./page.module.scss";
import { metadata } from "../layout";
import Drink from "../component/menu/Drink";
import Food from "../component/menu/Food";
import Story from "../component/menu/Story";
export default function Shop() {
  (metadata.title = "SHOP"), (metadata.description = "coffee & food menu");
  return (
    <div className={style.wrap}>
      <Top name="SHOP" />
      <Event />
      <Drink />
      <Food />
      <Story />
    </div>
  );
}

export const dynamic = "force-static";
