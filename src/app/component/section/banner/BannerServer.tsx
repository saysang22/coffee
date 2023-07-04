import React from "react";
import Banner from "./Banner";
import { getServerSession } from "next-auth";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

const BannerServer = async () => {
  // let session = await getServerSession(authOptions);
  return (
    <>
      {" "}
      <Banner />{" "}
    </>
  );
};

export default BannerServer;
