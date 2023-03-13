import styles from "../../styles/pages/book_inside_page.module.scss";
import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";
import Link from "next/link";
import PrimaryButton from "../primary-button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/breadcrumbs";

const BooksInside = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <Header />
      <main className={`${styles.book_inside_page} padd_t`}>
        <Breadcrumbs link1="Home" link2="Books" link3="Outlast" />
        <section className={`${styles.books_banner}`}>
          <div className={`${styles.book_img}`}>
            <img src={data.booksImg.url} alt="/" />
          </div>
          <div className={`${styles.book_info}`}>
            <div className={`${styles.description} bg_tertiary`}>
              <h2
                className={`${styles.heading_title} text_xxxl text_500 font_primary color_ex3`}
              >
                {data.title}
              </h2>
              <h5
                className={`${styles.short_desc} text_md text_500 font_secondary color_ex3`}
              >
                {data.shortDesc}
              </h5>
              <h4 className={`${styles.year} text_sm color_ex3`}>
                {data.year}
              </h4>
              <p className="text_md font_secondary color_ex3">{data.desc}</p>

              <div className={`${styles.buy_link}`}>
                <a href={data.link} target="_blank" rel="noreferrer">
                  <PrimaryButton title="Buy Now" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="container ptb">
          <div className={`${styles.reviews_section}`}>
            <div className="headtitle_btn">
              {/* <h2 className="text_xxxl text_500 font_primary color_ex3 heading_title">
                Reviews
              </h2> */}
            </div>
            <div>
              {data.reviews.map((el, id) => (
                <div className={`${styles.reviews}`} key={id}>
                  {/* <p key={id}>{el.review}</p>
                <p> {el.reviewerName}</p>
                <p> {el.reviewerProfile}</p> */}

                  <p className={`${styles.para} text_sm color_ex3`}>
                    {el.review}
                  </p>
                  <p className={`${styles.reviews_name} text_sm`}>
                    {el.reviewerName}
                  </p>
                  <p className={`${styles.reviews_profile} text_sm`}>
                    {el.reviewerProfile}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BooksInside;

export async function getServerSideProps(context) {
  const slug = context.query.slug;
  const query = gql`
  {
    publications(where: {slug: "${slug}"}) {
      booksImg {
        url
        width
        height
      }
      reviews {
        review
        reviewerName
        reviewerProfile
      }
      title
      subHead
      desc
      year
      slug
      shortDesc
      link
      id
    }
  }
`;
  const data = await request(
    "https://api-ap-south-1.hygraph.com/v2/cl8mpqcm73uzj01td6elyhdvm/master",
    query
  );
  return {
    props: {
      data: data.publications[0],
    }, // will be passed to the page component as props
  };
}
