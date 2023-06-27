import Main from "./component/main/Main";
import Video from "./component/section/Video/Video";
import BannerServer from "./component/section/banner/BannerServer";
import Scroll_img from "./component/section/scroll_img/Scroll_img";
import Slide from "./component/section/slide/Slide";
import styles from "./page.module.scss";
import { metadata } from "./layout";

export default function Home() {
  metadata.title = "STAR HOME";
  metadata.description = "STAR HOME";

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

export const dynamic = "force-static";
