import React, { ReactNode } from "react";
import style from "./ShopUI.module.scss";

const Shop: React.FC<{ children: ReactNode; name: string }> = ({
  children,
  name,
}) => {
  return (
    <section className={style.wrap}>
      <div className={style.inner}>
        <h2>{name}</h2>
        {children}
      </div>
    </section>
  );
};

export default Shop;
