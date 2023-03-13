import styles from "../../styles/sections/home/latest-tweets.module.scss";
import Link from "next/link";
import PrimaryButton from "../../pages/primary-button";
import ArrowBlack from "../../public/img/home/black_arrows.svg";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import SliderItem from "./Slider";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { request, gql } from "graphql-request";
import Moment from "moment";

const LatestTweetsslider = () => {
  const [tweets, setTweets] = useState();
  const SliderItemContent = [
    {
      titleName: "Dr. Mukund Rajan",
      titleSubname: "@Mukund_Rajan",
      titleDate: "Nov 7",
      decs: "Delighted my next book, co-authored with Colonel Rajeev Kumar, on the new business focus on Environment, Social and Governance (ESG), will be on book-shelves soon Smiling face with smiling eyes.",
    },
    {
      titleName: "Dr. Mukund Rajan",
      titleSubname: "@Mukund_Rajan",
      titleDate: "Nov 7",
      decs: "Remembering Keshav Desiraju, the Crusader Behind Mental Health Act 2017 m.thewire.in/article/government/remembering-keshav-desiraju-the-crusader-behind-mental-health-act-2013 via @thewire_in",
    },
    {
      titleName: "Dr. Mukund Rajan",
      titleSubname: "@Mukund_Rajan",
      titleDate: "Nov 7",
      decs: "Companies' branding will soon depend on their ESG rating. The trend is creating a new career stream. SMEs too will have to adhere to ESG standards to become competitive. Are you ready? Sign up now to listen & interact with 3 of the most experienced and accomplished experts (1/2)",
    },
  ];

  useEffect(() => {
    const query = `{
      tweets(first: 1000,orderBy: date_DESC) {
        image {
          url
          width
          height
        }
        author
        date
        tag
        link
        text
      }
    }`;
    request(
      "https://api-ap-south-1.hygraph.com/v2/cl8mpqcm73uzj01td6elyhdvm/master",
      query
    ).then((data) => {
      setTweets(data.tweets);
      // console.log(data.tweets);
    });
  }, []);
  useEffect(() => {
    // fetch(
    //   "https://api.twitter.com/2/tweets/search/recent?tweet.fields=context_annotations&max_results=100&query=camping(nature%20OR%20%22outdoor%20actvities%22)"
    // ).then((data) => console.log(data));
  }, []);
  var settings = {
    infinite: true,
    speed: 500,
    arrow: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: (
      <button className={`${styles.prevarrow}`}>
        <img src={ArrowBlack.src} alt="" />
      </button>
    ),
    nextArrow: (
      <button className={`${styles.nextarrow}`}>
        <img src={ArrowBlack.src} alt="" />
      </button>
    ),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          // variableWidth: false,
        },
      },
    ],
  };
  return (
    <>
      <section className={`${styles.latest_tweets} pb`}>
        <div className="container">
          <div className="headtitle_btn">
            <h2 className="text_xxxl text_500 font_primary color_ex3 heading_title">
              Latest Posts
            </h2>
            <div className={`${styles.button_center} button_center`}>
              <Link href="https://twitter.com/Mukund_Rajan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <a target="_blank">
                  <PrimaryButton title="Read More" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.tweets_slider}`}>
          <Slider {...settings}>
            {/* {SliderItemContent.map((sliderItem, ind) => (
              <SliderItem
                titleName={sliderItem.titleName}
                titleSubname={sliderItem.titleSubname}
                titleDate={sliderItem.titleDate}
                decs={sliderItem.decs}
                key={ind}
              />
            ))} */}
            {tweets &&
              tweets.map((e, i) => {
                return (
                  <div key={i} className={styles.tweet_wrapper}>
                    <img src={e.image.url} className={styles.img} />
                    <div className={`${styles.date} text_xxs color_ex3`}>
                      {Moment(e.date).format("Do MMMM, YYYY")}
                    </div>
                    <p className={`${styles.desc} text_reg color_ex3`}>
                      {e.text}
                    </p>
                    <div className={styles.btn}>
                      <a
                        href={`${e.link ? e.link : "/"}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text_xs"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                );
              })}
          </Slider>
          {/* <TwitterTimelineEmbed
            sourceType="profile"
            screenName="Mukund_Rajan"
            options={{ height: 400 }}
          /> */}
        </div>
      </section>
    </>
  );
};

export default LatestTweetsslider;
