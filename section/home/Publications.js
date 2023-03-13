import PublicationsCart from "../../components/PublicationsCard";
import styles from "../../styles/sections/home/publications.module.scss";
import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";
import Link from "next/link";
import PrimaryButton from "../../pages/primary-button";

const Publications = ({ booksLength, isLink }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const query = gql`
      {
        publications(first: ${booksLength},orderBy: year_DESC) {
          booksImg {
            url
            width
            height
          }
          title
          subHead
          year
          slug
          id
        }
      }
    `;
    request(
      "https://api-ap-south-1.hygraph.com/v2/cl8mpqcm73uzj01td6elyhdvm/master",
      query
    ).then((data) => setData(data.publications));
  }, []);

  return (
    <section className={`${styles.publications}`}>
      <div className="container">
        <div className={`${styles.publications_section} ptb`}>
          <div className="headtitle_btn">
            <h2 className="text_xxxl text_500 font_primary color_ex3 heading_title">
              Publications
            </h2>
            <div className={`${styles.button_center} button_center`}>
              <Link href="/books">
                <a>
                  <PrimaryButton title="View More" />
                </a>
              </Link>
            </div>
          </div>
          <div className={`${styles.card_section}`}>
            {data &&
              data.map((cardItem, ind) => (
                <PublicationsCart
                  isLink={isLink}
                  title={cardItem.title}
                  imgUrl={cardItem.booksImg.url}
                  subHead={cardItem.subHead}
                  year={cardItem.year}
                  slug={cardItem.slug}
                  key={ind}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
