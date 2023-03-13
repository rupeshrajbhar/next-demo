import styles from "../../styles/pages/media.module.scss";
import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";
//import components
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Breadcrumbs from "../../components/breadcrumbs";

import media_img1 from "../../public/img/news_big_img_1.jpg";
// import media_img2 from "../public/img/news_big_img_2.jpg";
import playBtn from "../../public/img/home/play.png";
import Link from "next/link";

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();

    const paths = data.map((cueEle) => {
        return{
            params: {
              insidePage: cueEle.id.toString(),
            },
        };
    });
  
    return{
        paths,
        fallback: false,
    };
  };

  export const getStaticProps = async (context) => {
    const id = context.params.insidePage;
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const data = await response.json();
  
    return{
      props: {
        data,
      },
    };
  };

const Inside = ({ data }) => {
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
            <div className={styles.mediaGrid}>
                <div className="info">
                    <h2 className="pb_20">{data.title}</h2>
                    <img src={data.url} className="pt_30" />
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Inside;
