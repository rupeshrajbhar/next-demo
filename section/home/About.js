import Link from "next/link";
import PrimaryButton from "../../pages/primary-button";
import styles from "../../styles/sections/home/about.module.scss";

const HomeAbout = () => {
  return (
    <section className={`${styles.banner_description}`}>
      <div className={`${styles.description} bg_tertiary`}>
        <h2
          className={`${styles.heading_title} text_xxxl text_500 font_primary color_ex3`}
        >
          <span className={`${styles.heading_span} text_xl`}>Meet</span>Dr.
          Mukund Rajan
        </h2>
        <h6 className="text_md font_secondary text_400 color_ex3">
          By focusing on Environment, Social and Governance (ESG) issues in
          India, Dr. Rajan works extensively in the field of sustainability and
          good governance and is committed to mentoring young individuals to
          learn, grow and become better decision makers with extensive and
          useful knowledge.
        </h6>
        <div className={`${styles.button_left}`}>
          <Link href="/about">
            <a>
              <PrimaryButton title="About Dr. Rajan" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
