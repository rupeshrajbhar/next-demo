import styles from "../styles/pages/media.module.scss";
import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";
//import components
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumbs from "../components/breadcrumbs";

// import media_img1 from "../public/img/news_big_img_1.jpg";
// import media_img2 from "../public/img/news_big_img_2.jpg";
import playBtn from "../public/img/home/play.png";
import Link from "next/link";
const Media = () => {
  const [data, setData] = useState();
  // data && console.log(data[1].link.indexOf("youtube"));
  useEffect(() => {
    const query = gql`
      {
        newsMedias(first: 1000, orderBy: date_DESC) {
          desc
          link
          date
          title
          shareLink
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
      setData(data.newsMedias);
    });
  }, []);
  return (
    <div>
      <Head>
        <title>Dr. Mukund Rajan</title>
        <meta
          name="description"
          content="Mentoring young individuals to learn, grow and become better decision makers with extensive and useful knowledge.
"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main className={`${styles.media_page} padd_t`}>
        <Breadcrumbs link1="Home" link2="Media" />
        <section>
          <div className="container">
            <div className="headtitle_btn">
              <h2 className="text_xxxl text_500 font_primary color_ex3 heading_title">
                Media
              </h2>
            </div>
          </div>
        </section>
        <section className={styles.mediaSec}>
          <div className="container">
            <div className={styles.mediaGrid}>
              {data &&
                data.map((Item, ind) => (
                  // <NewsItem title={Item.title} imgUrl={Item.imgUrl} key={ind} />
                  <Link href={Item.link} key={ind}>
                    <a className={styles.mediaitem} target="_blank">
                      <div className={styles.imgSec}>
                        <img src={Item.img?.url} />
                        <Link href={Item.link}>
                          <a target="_blank">
                            <img className={styles.imgPlay} src={playBtn.src} />
                          </a>
                        </Link>
                      </div>
                      <p
                        className={`${styles.para_txt} text_xxs font_secondary color_ex3`}
                      >
                        {Item.date} | {Item.title}
                      </p>
                      <p
                        className={`${styles.para_txt} text_sm font_secondary color_ex3`}
                      >
                        {Item.desc}
                      </p>
                    </a>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Media;
