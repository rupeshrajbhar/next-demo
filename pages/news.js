import styles from "../styles/pages/news.module.scss";

//import components
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PrimaryButton from "./primary-button";
import Breadcrumbs from "../components/breadcrumbs";
import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";
import Moment from "moment";

export default function News() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const query = gql`
      {
        news(first: 999, orderBy: date_DESC) {
          desc
          date
          title
          img {
            url
            width
            height
          }
          shareLink
        }
      }
    `;
    request(
      "https://api-ap-south-1.hygraph.com/v2/cl8mpqcm73uzj01td6elyhdvm/master",
      query
    ).then((data) => setData(data.news));
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
      <main className={`${styles.news_page} padd_t`}>
        <Breadcrumbs link1="Home" link2="news" />
        <section className={`${styles.news_section}`}>
          <div className="container">
            <div className="headtitle_btn">
              <h2 className="text_xxxl text_500 font_primary color_ex3 heading_title">
                News
              </h2>
            </div>
            {data &&
              data.map((item, ind) => (
                <div className={`${styles.news_item}`} key={ind}>
                  <div className={`${styles.news_info}`}>
                    <h6 className="text_xxs color_primary text_400">
                      {Moment(item.date).format("D MMM YYYY")} | {item.title}
                    </h6>
                    <p
                      className={`${styles.para} text_sm color_primary font_primary`}
                    >
                      {item.desc}
                    </p>
                    <div>
                      <a href={item.shareLink}>
                        <PrimaryButton title="Read More" />
                      </a>
                    </div>
                  </div>
                  <div className={`${styles.news_img}`}>
                    <img src={item.img?.url} alt="" />
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
