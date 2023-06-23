import TestRedux from "./TestRedux";
import Main from "./component/main/Main";
import Video from "./component/section/Video/Video";
import Banner from "./component/section/banner/Banner";
import BannerServer from "./component/section/banner/BannerServer";
import Scroll_img from "./component/section/scroll_img/Scroll_img";
import Slide from "./component/section/slide/Slide";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Main />
      <BannerServer />
      <Video />
      <Scroll_img />
      <Slide />
    </main>
  );
}
