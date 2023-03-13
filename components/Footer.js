import styles from "../styles/components/Footer.module.scss";
import FooterBg from "../public/img/home/footer_bg.jpg";
import Facebook from "../public/img/home/facebook.png";
import Twitter from "../public/img/home/twitter.png";
import Linkedin from "../public/img/home/linkedin.png";
import TingLogo from "../public/img/made_by_ting.svg";
import Link from "next/link";

const Footer = () => {
  const bgImg = {
    backgroundImage: `url(${FooterBg.src})`,
    width: "100%",
  };
  // console.log(bgImg);
  return (
    <footer className={`${styles.main_footer}`} style={bgImg}>
      <div className="container">
        <div className={`${styles.footer_section}`}>
          <div className={`${styles.section_1}`}>
            <div className={`${styles.head_log}`}>
              <h4 className="text_lg color_white font_primary">
                Dr. Mukund Rajan
              </h4>
            </div>
            <ul className={`${styles.link_section}`}>
              <li>
                <Link href="/about">
                  <a className="text_xs color_white font_primary">About</a>
                </Link>
              </li>
              <li>
                <Link href="/books">
                  <a className="text_xs color_white font_primary">Books</a>
                </Link>
              </li>

              <li>
                <Link href="/news">
                  <a className="text_xs color_white font_primary">News</a>
                </Link>
              </li>
              <li>
                <Link href="/media">
                  <a className="text_xs color_white font_primary">Media</a>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/Mukund_Rajan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  <a
                    target="_blank"
                    className="text_xs color_white font_primary"
                  >
                    Tweets
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text_xs color_white font_primary">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.section_2}`}>
            <ul className={`${styles.social_media}`}>
              {/* <li className="bg_primary">
                <Link href="/about">
                  <a target="_blank">
                    <img src={Facebook.src} alt="" />
                  </a>
                </Link>
              </li> */}
              <li className="bg_primary">
                <Link href="https://twitter.com/Mukund_Rajan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  <a target="_blank">
                    <img src={Twitter.src} alt="" />
                  </a>
                </Link>
              </li>
              <li className="bg_primary">
                <Link href="https://www.linkedin.com/in/mukund-rajan-497a825/?originalSubdomain=in">
                  <a target="_blank">
                    <img src={Linkedin.src} alt="" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.section_3}`}>
            <p className="text_xs color_white font_primary">
              © Copyright 2023 Dr Mukund Rajan
            </p>
            <Link href="https://www.ting.in/">
              <a target="_blank">
                <img src={TingLogo.src} alt="" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
