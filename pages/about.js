/* eslint-disable react/jsx-key */
import styles from "../styles/pages/about.module.scss";

//import components
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumbs from "../components/breadcrumbs";
import React from "react";
import Slider from "react-slick";
import img1 from "../public/img/about_us/img1.jpg";
import environmental from "../public/img/about_us/environmental.jpg";
import quate from "../public/img/about_us/quate.jpg";
import ArrowBlack from "../public/img/about_us/black_arrows_old.svg";
import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";

export default function About() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const query = gql`
      {
        journeySliders(first: 1000, orderBy: year_DESC) {
          year
          desc
        }
      }
    `;
    request(
      "https://api-ap-south-1.hygraph.com/v2/cl8mpqcm73uzj01td6elyhdvm/master",
      query
    ).then((data) => setData(data.journeySliders));
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrow: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: (
      <button className={`${styles.prevarrow} about_prevarrow`}>
        <img src={ArrowBlack.src} alt="" />
      </button>
    ),
    nextArrow: (
      <button className={`${styles.nextarrow} about_nextarrow`}>
        <img src={ArrowBlack.src} alt="" />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
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
      <main className={`${styles.about_page} padd_t`}>
        <Breadcrumbs link1="Home" link2="About" />
        <section className={`${styles.banner_description}`}>
          <div className={`${styles.description} bg_tertiary`}>
            <div className="headtitle_btn headtitle_b_p">
              <h2 className="text_xxxl text_500 font_primary color_ex3 heading_title">
                The Story
              </h2>
            </div>
            <h3
              className={`${styles.heading_sub_title} text_md text_500 font_secondary color_ex3`}
            >
              Dr. Mukund Rajan is the Chairperson of ECube Investment Advisors,
              a first of its kind platform created in 2019 to catalyse
              Environment, Social and Governance (ESG) changes in Corporate
              India.
            </h3>
            <p className="text_sm font_secondary text_400 color_ex3">
              Prior to this, he held a number of senior executive positions
              through his 23-year career with the Tata Group, where he served as
              the first Brand Custodian of the Tata Group, Chief Ethics Officer
              of the Group, Chairman of the Tata Global Sustainability Council,
              and Member of the Group Executive Council at Tata Sons. He served
              on the boards of various Tata companies including Tata
              Teleservices, Tata Communications, Tata SIA Airlines and Tata AIG.
            </p>
          </div>
        </section>
        <section className={`${styles.main_desc}`}>
          <div className="container">
            <div className={`${styles.main_content}`}>
              <img src={img1.src} alt="" />
              <div className={`${styles.para_desc}`}>
                <p className="text_sm font_secondary text_400 color_ex3">
                  Dr. Rajan also serves as the Chairperson of the Environment
                  and Climate Change Committee of the Federation of Indian
                  Chambers of Commerce and Industry (FICCI), and is a member of
                  the ESG Advisory Committee Instituted by the Securities and
                  Exchange Board of India (SEBI). He serves on the Council of
                  Management of the Forum of Free Enterprise. In 2007, the World
                  Economic Forum honoured Dr. Rajan as a Young Global Leader. He
                  was also part of the inaugural class of the Confederation of
                  Indian Industry (CII)-Aspen Institute India Leadership
                  Initiative.
                </p>
                <p className="text_sm font_secondary text_400 color_ex3">
                  Dr. Rajan graduated from the BTech program at the Indian
                  Institute of Technology (IIT) Delhi in 1989. He completed a
                  Masters and Doctorate in International Relations on a Rhodes
                  Scholarship at Oxford University.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.environmental_main} bg_tertiary`}>
          <div className="container">
            <div className={`${styles.environmental_flex}`}>
              <div className={`${styles.environmental_img}`}>
                <img src={environmental.src} alt="" />
              </div>
              <div className={`${styles.environmental_content}`}>
                <p className="text_sm font_secondary text_400 color_ex3">
                  His doctoral dissertation,
                  <span className="text_600">
                    “Global Environmental Politics”
                  </span>
                  , was published by Oxford University Press in 1996, and his
                  second book,
                  <span className="text_600">
                    “The Brand Custodian – My Years with the Tatas”
                  </span>
                  , was published by HarperCollins in 2019.
                </p>
                <p className="text_sm font_secondary text_400 color_ex3">
                  His third book on Corporate Responsibility and ESG, titled
                  <span className="text_600">
                    “OUTLAST - How ESG Can Benefit Your Business”
                  </span>
                  , co-authored with Dr Colonel Rajeev Kumar, was published by
                  HarperCollins in November 2021 and won The Green Literature
                  Festival Honour Book award in 2022 for Business Literature.
                </p>
                <p className="text_sm font_secondary text_400 color_ex3">
                  His fourth and most recent book, “Tata’s Leadership Experiment
                  – The Story of the Tata Administrative Service”, co-authored
                  with Bharat Wakhlu and Some Bharia, was published by Harper
                  Collins in 2022.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.the_journey_main}`}>
          <div className="container">
            <div className={`${styles.the_journey_title}`}>
              <div className="headtitle_btn headtitle_b_p">
                <h2 className="text_xxxl text_500 font_primary color_ex3 heading_title">
                  The Journey
                </h2>
              </div>
            </div>
            <div className={`${styles.the_journey_histroy_flex}`}>
              <Slider {...settings}>
                {data &&
                  data.map((silderItem, ind) => (
                    <div
                      className={`${styles.the_journey_histroy_content}`}
                      key={ind}
                    >
                      <div className={`${styles.the_journey_histroy_border}`}>
                        <span></span>
                      </div>
                      <div className={`${styles.the_journey_histroy_des}`}>
                        <h4
                          className={`${styles.history_title} text_lg text_400 font_primary color_ex2`}
                        >
                          {silderItem.year}
                        </h4>
                        <p className="text_sm font_secondary text_400 color_ex3">
                          {silderItem.desc}
                        </p>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>

            <div className={`${styles.the_journey_content} pt`}>
              <img src={quate.src} className={`${styles.quate}`} alt="" />
              <h2
                className={`${styles.heading_title} text_xxxl text_500 font_primary color_ex3`}
              >
                The Philosophy
              </h2>

              <p
                className={`${styles.para} text_md text_400 font_secondary color_ex3`}
              >
                I have been blessed with incredible opportunities to view
                first-hand and participate in defining shifts in Indian and
                International affairs - from my time researching global
                environmental issues at Oxford University in the late 1980’s and
                early 1990’s, to a period of dramatic transformation of India’s
                largest corporate house, the Tata Group, to my current
                engagement with the domain of Environment, Social and Governance
                (ESG). I am convinced that anybody, with the right attitude
                towards hard work, curiosity and continuous learning, humility
                and a willingness to collaborate and work with teams of high
                achievers, can emerge as a leader and create transformative
                impact.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
