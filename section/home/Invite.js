import styles from "../../styles/sections/home/Invite.module.scss";
import qude from "../../public/img/home/qude.svg";
import Link from "next/link";
import PrimaryButton from "../../pages/primary-button";

const Invite = () => {
  return (
    <section className={`${styles.guest_speaker} bg_tertiary ptb`}>
      <div className="container">
        <img src={qude.src} className={`${styles.qude}`} alt="" />
        <h2
          className={`${styles.heading_title} text_xxxl text_500 font_primary color_ex3`}
        >
          Guest Speaker Invitation
        </h2>

        <p className={`${styles.para} text_md font_secondary color_ex3`}>
          Dr. Mukund Rajan is an acclaimed speaker and representative of Indian
          industry. He has shared his wisdom at many prestigious events and
          conferences across the globe. If you're planning to host a talk, do
          get in touch
        </p>

        <div className={`${styles.button_center} button_center`}>
          <Link href="/about">
            <a>
              <PrimaryButton title="Invite Dr. Mukund Rajan" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Invite;
