import React from "react";
import SideNav from "@/app/component/menu/SideNav";
import ShopUI from "@/app/component/UI/ShopUI";
import DataType from "@/model/dataType";
import { metadata } from "@/app/layout";
import MenuList from "./MenuList";

metadata.title = "brood coffee";
metadata.description = "브루드커피 페이지";

import clientPromise from "@/utill/database";

const page = async () => {
  const client = await clientPromise;
  const db = client.db("coffee");
  const result = await db.collection<DataType>("drink").find().toArray();

  return (
    <ShopUI name="에스프레소">
      <SideNav />
      <MenuList result={result} />
    </ShopUI>
  );
};

export default page;
export const dynamic = "force-static";
