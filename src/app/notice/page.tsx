import { NoticeType } from "@/model/notice";
import Shop from "../component/UI/ShopUI";
import NoticeChild from "./NoticeChild";

export default async function Notice() {
  return (
    <Shop name="게시판">
      <NoticeChild />
    </Shop>
  );
}

export const dynamic = "force-static";
