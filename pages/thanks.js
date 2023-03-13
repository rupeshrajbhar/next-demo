import styles from "../styles/pages/thanks.module.scss";

//import components
import Link from "next/link";
import React from "react";
import Head from "next/head";
import logo from "../public/img/logo.png";

export default function Thanks() {
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
      <main className={`${styles.thank_you}`}>
        <section className={`${styles.thank_you_main}`}>
          <div className={`${styles.thank_you_content}`}>
            {/* <img className={`${styles.thank_you_logo}`} src={logo.src} alt="" /> */}
            <h2 className="text_xxxl text_500 font_primary color_ex3 heading_title">
              Thank you for your details
            </h2>
            <div className={`${styles.back_btn}`}>
              <Link href="/">
                <a
                  className={`${styles.btn_txt} text_xs font_secondary bg_secondary color_white`}
                >
                  Back To Home
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
