// "use client";
// import React, { useEffect, useState } from "react";
// import { metadata } from "./layout";
// import { HeadType } from "@/model/head";
// import Head from "next/head";
// const test = metadata;
// const LayoutHead = () => {
//   const [metadata, setMetadata] = useState<HeadType>(test);
//   useEffect(() => {
//     setMetadata((prev) => ({
//       ...prev,
//       title: metadata.title,
//     }));
//   }, [metadata]);
//   return (
//     <Head>
//       <title>{metadata.title}</title>
//     </Head>
//   );
// };

// export default LayoutHead;
