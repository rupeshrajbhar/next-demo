import styles from "../../styles/sections/home/slider.module.scss";
import Link from "next/link";
import Share from "../../public/img/home/share.svg";

const SliderItem = ({ titleName, titleSubname, titleDate, decs }) => {
  return (
    <div className={`${styles.slider_item}`}>
      <div className={`${styles.itemname_share}`}>
        <p className={`${styles.item_name} text_xxs`}>
          {titleName}
          <span>{titleSubname}</span>
          <sub>&#8226;</sub> {titleDate}
        </p>
        <img src={Share.src} alt="" />
      </div>
      <p className={`${styles.para} text_xs color_ex3`}>{decs}</p>
    </div>
  );
};

export default SliderItem;
