import styles from "../../styles/sections/home/banner.module.scss";
import BannerImg from "../../public/img/home/banner.jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <div>
      <section className={styles.banner}>
        <img src={BannerImg.src} className={`${styles.fullwidthimg}`} />
        <div className={styles.banner_title_main}>
          <h1 className={`${styles.banner_title_head}  text_xxxl font_primary`}>
            Well-informed choices can <br className="xs-visible" /> transform
            the world.
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Banner;
