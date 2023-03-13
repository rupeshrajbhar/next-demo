import styles from "../../styles/sections/home/news-item.module.scss";
import Share from "../../public/img/home/share.svg";
import Audio from "../../public/img/home/audio.svg";
import ArrowBlack from "../../public/img/home/black_arrows.svg";
import Link from "next/link";
import Play from "../../public/img/home/play.png";
import { useState } from "react";
import Cross from "../../public/img/news/cross.svg";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const NewsItem = ({
  desc,
  imgUrl,
  link,
  shareLink,
  date,
  title,
  arrowslink,
}) => {
  const [isPopupActive, setisPopupActive] = useState(false);
  // console.log(arrowslink);
  if (link?.indexOf("youtube") > -1) {
    // console.log("contains youtube");
  }
  return (
    <div className={`${styles.news_item}`}>
      <div className={`${styles.info_img}`}>
        <div className={`${styles.info_img_wrapper}`}>
          <div className={`${styles.info}`}>
            <p className={`${styles.para} text_xxs color_ex3`}>
              {date} | {title}
            </p>
            <p className={`${styles.para} text_sm color_ex3`}>{desc}</p>
          </div>
          <div className={`${styles.img}`}>
            <img src={imgUrl} alt="" />
            {/* <a href={link} className={`${styles.paly_btn}`}>
              <img src={Play.src} className={`${styles.paly_button}`} alt="" />
            </a> */}
          </div>
        </div>
        <div className={`${styles.audio_arrow}`}>
          <div className={`${styles.audio}`}>
            {link?.indexOf("youtube") <= -1 && shareLink !== "/" && (
              <a href={shareLink} target="_blank" rel="noreferrer">
                <img src={Audio.src} alt="" />
              </a>
            )}
            {/* <Link href={shareLink}> */}
            <a onClick={() => setisPopupActive(true)}>
              <img src={Share.src} alt="" />
            </a>
            {/* </Link> */}
            <div className={`sharePooup ${isPopupActive && "active"}`}>
              <div className={"section"}>
                <img
                  src={Cross.src}
                  alt=""
                  className={"cross"}
                  onClick={() => setisPopupActive(false)}
                />
                <div className={"social_wrapper"}>
                  <FacebookShareButton url={shareLink}>
                    <FacebookIcon size={40} />
                  </FacebookShareButton>
                  <LinkedinShareButton url={shareLink}>
                    <LinkedinIcon size={40} />
                  </LinkedinShareButton>
                  <TwitterShareButton url={shareLink}>
                    <TwitterIcon size={40} />
                  </TwitterShareButton>
                  <WhatsappShareButton url={shareLink}>
                    <WhatsappIcon size={40} />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.arrow}`}>
            <Link href={arrowslink} target="_blank" rel="noreferrer">
              <a>
                <img src={ArrowBlack.src} alt="" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
