import Link from "next/link";
import styles from "../styles/components/Header.module.scss";
import logo from "../public/img/logo.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  // const [divHeight, setDivHeight] = useState(0);
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    let calHeight = document.querySelector("header");
    let height = calHeight.offsetHeight + "px";
    // console.log(height);

    document.documentElement.style.setProperty("--headerHeight", height);
  }, []);

  return (
    <>
      <header className={`${styles.main_header}`}>
        <div className="container">
          <nav className={`${styles.navbar}`}>
            <div className={`${styles.brand}`}>
              <Link href="/">
                <a>
                  <Image src={logo} />
                </a>
              </Link>
            </div>
            <div className={`${styles.menu}`}>
              <ul>
                <li>
                  <Link href="/about">
                    <a className="text_xs font_primary">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/books">
                    <a className="text_xs font_primary">Books</a>
                  </Link>
                </li>
                <li>
                  <Link href="/news">
                    <a className="text_xs font_primary">News</a>
                  </Link>
                </li>
                <li>
                  <Link href="/media">
                    <a className="text_xs font_primary">Media</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/Mukund_Rajan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                    <a target="_blank" className="text_xs font_primary">
                      Tweets
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="text_xs font_primary">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div
        className={`${styles.sidenav} ${sidebarActive ? styles.active : ""}`}
      >
        <ul>
          <li>
            <Link href="/about">
              <a className="text_xl font_primary color_white">About</a>
            </Link>
          </li>
          <li>
            <Link href="/books">
              <a className="text_xl font_primary color_white">Books</a>
            </Link>
          </li>
          <li>
            <Link href="/news">
              <a className="text_xl font_primary color_white">News</a>
            </Link>
          </li>
          <li>
            <Link href="/media">
              <a className="text_xl font_primary color_white">Media</a>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/Mukund_Rajan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
              <a target="_blank" className="text_xl font_primary color_white">
                Tweets
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text_xl font_primary color_white">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.openClosebutton}`}>
        <div className={`${styles.main}`}>
          <div className={`${styles.image}`}>
            <Link href="/">
              <a>
                <Image src={logo} className={`${styles.headLogo}`} />
              </a>
            </Link>
          </div>
          <div
            onClick={() => setSidebarActive(!sidebarActive)}
            className={`${styles.bar_icon} ${
              sidebarActive ? styles.close_icon : ""
            }`}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
