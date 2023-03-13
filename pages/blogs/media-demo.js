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
// import NextLink from 'next/link';
// import Link from '@mui/joy/Link';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await response.json();

  return{
    props: {
      data:data.slice(0,50)
    },
  };
};

const Media = ({ data }) => {

  

    // const [User, setUser] = useState([]);

    // const getUser = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    //     setUser(await (await response).json());
    // }

    // useEffect(() => {
    //     getUser();
    // },[])
 
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
                Blogs
              </h2>
            </div>
          </div>
        </section>
        <section className={styles.mediaSec}>
          <div className="container">
            <div className={styles.mediaGrid}>
                {
                    data.map((cueEle,ind) => {
                        return(
                            <div className="info" key={ind}>
                                <h2 className="pb_20">{cueEle.title}</h2>
                                
                              <Link href={`/blogs/${cueEle.id}`}>
                                <img src={cueEle.url} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Media;
