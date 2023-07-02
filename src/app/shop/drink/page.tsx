import React from "react";
import ShopUI from "@/app/component/UI/ShopUI";
import DataType from "@/model/dataType";
import clientPromise from "@/utill/database";
import MenuList from "./MenuList";
import SideNav from "@/app/component/menu/SideNav";
import { metadata } from "@/app/layout";

metadata.title = "음료";
metadata.description = "음료 페이지";

const page = async () => {
  const client = await clientPromise;
  const db = client.db("coffee");
  const result = await db.collection<DataType>("drink").find().toArray();
  return (
    <ShopUI name="음료">
      <SideNav />
      <MenuList result={result} />
    </ShopUI>
  );
};

export default page;
export const dynamic = "force-static";
