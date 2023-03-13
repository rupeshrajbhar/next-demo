import styles from "../../styles/sections/home/juicer.module.scss";

import ArrowBlack from "../../public/img/home/black_arrows.svg";
import Link from "next/link";
import PrimaryButton from "../../pages/primary-button";
import Slider from "react-slick";
import { useEffect, useState } from "react";

const Juicer = () => {
  // useEffect(() => {
  //   let social_item = document.querySelectorAll(".social_item");
  //   console.log(social_item);
  // }, []);

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
      <section className={`${styles.juicer_tweets} pb`}>
        <div className="container">
          <div className="headtitle_btn">
            <h2 className="text_xxxl text_500 font_primary color_ex3 heading_title">
              Latest tweets
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
        <div className={`${styles.juicer_slider}`}>
          <Slider {...settings}>
            <div className="social_item">
              <ul
                className="juicer-feed"
                data-feed-id="vedantalimited"
                data-filter="Facebook"
                data-per="1"
                data-truncate="300"
              ></ul>
            </div>
            <div className="social_item">
              <ul
                className="juicer-feed"
                data-feed-id="vedantalimited"
                data-filter="Facebook"
                data-per="1"
                data-truncate="300"
              ></ul>
            </div>
            <div className="social_item">
              <ul
                className="juicer-feed"
                data-feed-id="vedantalimited"
                data-filter="Facebook"
                data-per="1"
                data-truncate="300"
              ></ul>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Juicer;
