import DataType from "@/model/dataType";
import clientPromise from "@/utill/database";
import React from "react";
import { ObjectId } from "mongodb";
import style from "./page.module.scss";
import Top from "@/app/component/menu/Top";
import CartButton from "@/app/component/menu/CartButton";

// export const dynamicParams = true;

export async function generateStaticParams() {
  const client = await clientPromise;
  const db = client.db("coffee");
  const result = await db.collection<DataType>("drink").find().toArray();
  return result.map((data: DataType) => {
    return { listDetail: data._id.toString() };
  });
}

const Detail = async ({ params }: { params: { listDetail: string } }) => {
  const client = await clientPromise;
  const db = client.db("coffee");
  const result = await db
    .collection<DataType>("drink")
    .findOne(new ObjectId(params.listDetail));

  const test = result?.description.replaceAll("\\n", "<br/><br/>");
  return (
    <>
      <section className={style.wrap}>
        <Top name={result?.type} />
        <div className={style.inner}>
          <div className={style.img_wrap}>
            <img src={result?.img} alt={result?.img} />
          </div>
          <div className={style.text_wrap}>
            <div className={style.title_wrap}>
              <h2>{result?.title}</h2>
              <CartButton />
            </div>
            <div className={style.description}>
              <span
                dangerouslySetInnerHTML={{
                  __html: typeof test === "string" ? test : "",
                }}
              ></span>
            </div>
            <div className={style.info_wrap}>
              <div className={style.info_title_wrap}>
                <span>{result?.info_title}</span>
                <span>{result?.info_val}</span>
              </div>
              <div className={style.content_wrap}>
                <div className={style.left}>
                  <div className={style.flex}>
                    <span>{result?.content_01}</span>
                    <span>{result?.content_val_01}</span>
                  </div>
                  <div className={style.flex}>
                    <span>{result?.content_02}</span>
                    <span>{result?.content_val_02}</span>
                  </div>
                  <div className={style.flex}>
                    <span>{result?.content_03}</span>
                    <span>{result?.content_val_03}</span>
                  </div>
                </div>
                <div className={style.right}>
                  <div className={style.flex}>
                    <span>{result?.content_04}</span>
                    <span>{result?.content_val_04}</span>
                  </div>
                  <div className={style.flex}>
                    <span>{result?.content_05}</span>
                    <span>{result?.content_val_05}</span>
                  </div>
                  <div className={style.flex}>
                    <span>{result?.content_06}</span>
                    <span>{result?.content_val_06}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
