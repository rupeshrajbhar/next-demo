import styles from "../../styles/sections/home/news-media.module.scss";
// import NewsBig1 from "../../public/img/home/news_big_img_1.jpg";
import Play from "../../public/img/home/play.png";
import NewsItem from "./news_item";
import Link from "next/link";
import Share from "../../public/img/home/share.svg";
import Audio from "../../public/img/home/audio.svg";
import ArrowBlack from "../../public/img/home/black_arrows.svg";
import PrimaryButton from "../../pages/primary-button";
import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

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

const NewsMedia = () => {
  const [data, setData] = useState();
  const [isPopupActive, setisPopupActive] = useState(false);
  // data && console.log(data[1].link.indexOf("youtube"));
  useEffect(() => {
    const query = gql`
      {
        newsMedias(first: 4, orderBy: date_DESC) {
          desc
          link
          shareLink
          date
          title
          arrowslink
          img {
            url
            width
            height
          }
        }
        news(first: 4, orderBy: date_DESC) {
          desc
          date
          title
          link
          shareLink
          arrowslink
          img {
            url
            width
            height
          }
        }
      }
    `;
    request(
      "https://api-ap-south-1.hygraph.com/v2/cl8mpqcm73uzj01td6elyhdvm/master",
      query
    ).then((data) => {
      const copyArray = [...data.newsMedias, ...data.news];
      const uniqueDates = copyArray.sort(function (a, b) {
        const date1 = new Date(a.date);
        const date2 = new Date(b.date);
        return date2 - date1;
      });
      setData(uniqueDates.slice(0, 4));
    });
  }, []);

  return (
    <section className={`${styles.news_media_section} ptb`}>
      <div className="container">
        <div className="headtitle_btn">
          <h2 className="text_xxxl text_500 font_primary color_ex3 heading_title">
            News & Media
          </h2>
          {/* <div className={`${styles.button_center} button_center`}>
            <Link href="/media">
              <a>
                <PrimaryButton title="View More" />
              </a>
            </Link>
          </div> */}
        </div>
        {data && (
          <div className={`${styles.news_media}`}>
            <div className={`${styles.news_media_1}`}>
              {data.slice(1).map((Item, ind) => (
                <NewsItem
                  desc={Item.desc}
                  date={Item.date}
                  title={Item.title}
                  imgUrl={Item.img?.url === undefined ? "" : Item.img?.url}
                  link={Item.link === null ? "" : Item.link}
                  shareLink={Item.shareLink === null ? "/" : Item.shareLink}
                  arrowslink={Item.arrowslink ? Item?.arrowslink : "/"}
                  // arrowslink={Item.arrowslink === undefined ? "/" : Item.arrowslink}
                  key={ind}
                />
              ))}
            </div>
            <div className={`${styles.news_media_2}`}>
              <div className={`${styles.media_img}`}>
                {data[0]?.link.indexOf("youtube") > -1 && (
                  <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom, lgVideo]}
                  >
                    <a href={data[0].link}>
                      <img src={data[0].img?.url} alt="" />
                      <img
                        src={Play.src}
                        className={`${styles.paly_button}`}
                        alt=""
                      />
                    </a>
                  </LightGallery>
                )}
                {data[0]?.link?.indexOf("youtube") <= -1 && (
                  <>
                    <img src={data[0].img?.url} alt="" />
                    {/* <img
                      src={Play.src}
                      className={`${styles.paly_button}`}
                      alt=""
                    /> */}
                  </>
                )}
              </div>
              <div className={`${styles.media_info}`}>
                <p className={`${styles.date} text_xxs color_ex3`}>
                  {data[0].date} | {data[0].title}
                </p>
                <p className={`${styles.para} text_reg color_ex3`}>
                  {data[0].desc}
                </p>
                <div className={`${styles.audio_arrow}`}>
                  <div className={`${styles.audio}`}>
                    {data[0].link?.indexOf("youtube") <= -1 && (
                      <>
                        <a href={data[0]?.shareLink}>
                          <img src={Audio.src} alt="" />
                        </a>
                      </>
                    )}
                    <img
                      src={Share.src}
                      alt=""
                      onClick={() => setisPopupActive(true)}
                    />

                    <div className={`sharePooup ${isPopupActive && "active"}`}>
                      <div className={"section"}>
                        <img
                          src={Cross.src}
                          alt=""
                          className={"cross"}
                          onClick={() => setisPopupActive(false)}
                        />
                        <div className={"social_wrapper"}>
                          <FacebookShareButton
                            url={
                              data[0].shareLink === null
                                ? "/"
                                : data[0].shareLink
                            }
                          >
                            <FacebookIcon size={40} />
                          </FacebookShareButton>
                          <LinkedinShareButton
                            url={
                              data[0].shareLink === null
                                ? "/"
                                : data[0].shareLink
                            }
                          >
                            <LinkedinIcon size={40} />
                          </LinkedinShareButton>
                          <TwitterShareButton
                            url={
                              data[0].shareLink === null
                                ? "/"
                                : data[0].shareLink
                            }
                          >
                            <TwitterIcon size={40} />
                          </TwitterShareButton>
                          <WhatsappShareButton
                            url={
                              data[0].shareLink === null
                                ? "/"
                                : data[0].shareLink
                            }
                          >
                            <WhatsappIcon size={40} />
                          </WhatsappShareButton>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.arrow}`}>
                    <a href={data[0]?.arrowslink}>
                      <img src={ArrowBlack.src} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsMedia;
