import styles from "../../styles/pages/books.module.scss";

//import components
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Publications from "../../section/home/Publications";
import Breadcrumbs from "../../components/breadcrumbs";
import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";
import PublicationsCart from "../../components/PublicationsCard";

export default function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = gql`
      {
        publications(orderBy: year_DESC) {
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
      <main className={`${styles.books_page} padd_t`}>
        <Breadcrumbs link1="Home" link2="Books" />

        <div className="container">
          <div className={`${styles.publications_section} pb`}>
            <h2
              className={`${styles.heading_title} text_xxxl text_500 font_primary color_ex3`}
            >
              The Library
            </h2>
            <div className={`${styles.card_section}`}>
              {data &&
                data.map((cardItem, ind) => (
                  <PublicationsCart
                    isLink
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
      </main>
      <Footer />
    </div>
  );
}
