import React from "react";
import SideNav from "@/app/component/menu/SideNav";
import ShopUI from "@/app/component/UI/ShopUI";
import DataType from "@/model/dataType";
import { metadata } from "@/app/layout";
import clientPromise from "@/utill/database";
import MenuList from "./MenuList";

metadata.title = "coldBrew";
metadata.description = "콜드브루 페이지";

const page = async () => {
  const client = await clientPromise;
  const db = client.db("coffee");
  const result = await db.collection<DataType>("drink").find().toArray();

  return (
    <ShopUI name="콜드브루">
      <SideNav />
      <MenuList result={result} />
    </ShopUI>
  );
};

export default page;
export const dynamic = "force-static";
