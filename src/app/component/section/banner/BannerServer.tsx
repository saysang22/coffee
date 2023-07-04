import React from "react";
import Banner from "./Banner";
import { getServerSession } from "next-auth";

const BannerServer = async () => {
  let session = await getServerSession();
  return <>{session === null ? <Banner /> : null}</>;
};

export default BannerServer;
