import styles from "../styles/pages/Home.module.scss";

//import components

import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../section/home/Banner";
import HomeAbout from "../section/home/About";
import Publications from "../section/home/Publications";
import Invite from "../section/home/Invite";
import NewsMedia from "../section/home/news-media";
import LatestTweetsslider from "../section/home/Latest-Tweets";
import Script from "next/script";
import Juicer from "../section/home/juicer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
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
        <link
          href="https://assets.juicer.io/embed.css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <Header />
      <main className={`${styles.index_page} padd_t`}>
        <Banner />
        <HomeAbout />
        <Publications booksLength={4} />
        <Invite />
        <NewsMedia />
        <LatestTweetsslider />
        {/* <Juicer /> */}
      </main>

      <Footer />
      <Script
        src="https://assets.juicer.io/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
