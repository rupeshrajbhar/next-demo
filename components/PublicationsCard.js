import PrimaryButton from "../pages/primary-button";
import styles from "../styles/sections/home/PublicationsCard.module.scss";
import Link from "next/link";

const PublicationsCart = ({ imgUrl, title, subHead, year, isLink, slug }) => {
  return (
    <div className={`${styles.card}`}>
      <img src={imgUrl} alt="" />
      <h5
        className={`${styles.card_title} text_sm color_primary font_primary text_500`}
      >
        {title}
      </h5>
      <h6
        className={`${styles.card_info} text_xxs color_ex3 text_400 font_secondary`}
      >
        {subHead}
      </h6>
      <h4 className={`${styles.year} text_reg font_primary color_primary`}>
        {year}
      </h4>
      {isLink && (
        <div className={`${styles.button_Section}`}>
          <Link href={`/books/${slug}`}>
            <a>
              <PrimaryButton title="Read More" />
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PublicationsCart;
