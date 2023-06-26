import React, { memo } from "react";
import { getServerSession } from "next-auth";
import HeaderItme from "@/model/header";
import HeaderList from "./HeaderList";
import style from "./HeaderComponent.module.scss";
import HeaderInput from "./HeaderInput";
import Login from "@/app/button/Login";
import Cart from "./Cart";
import MobileHeader from "./MobileHeader";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Logout from "@/app/button/Logout";

const HeaderComponent: React.FC<{ data: HeaderItme[] }> = async ({ data }) => {
  let session;

  session = await getServerSession(authOptions);
  // const { data: session } = useSession();

  console.log("세션", session);

  return (
    <>
      <header className={style.wrap}>
        <div className={style.inner}>
          <div className={style.left}>
            <div className={style.logo}>민하코</div>
            <HeaderList data={data} />
          </div>
          <div className={style.rigth}>
            <HeaderInput />
            <div className={style.info_wrap}>
              {session === null ? (
                <Login />
              ) : (
                <>
                  <Logout />
                  {/* {session.user.name}님 */}
                </>
              )}
              <Cart />
            </div>
          </div>
        </div>
        <div className={style.mobile}>
          <MobileHeader />
        </div>
      </header>
    </>
  );
};

export default memo(HeaderComponent);
