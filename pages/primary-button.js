import RightArrow from "../public/img/home/right-arrow.svg";
import styles from "../styles/pages/primary-button.module.scss";

const PrimaryButton = ({ title }) => {
  return (
    <p
      className={`${styles.primary_button} text_xs font_secondary bg_secondary color_white`}
    >
      {title}
      <img src={RightArrow.src} className={`${styles.right_arrow}`} alt="" />
    </p>
  );
};

export default PrimaryButton;
