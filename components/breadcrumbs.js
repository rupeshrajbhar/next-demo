import Link from "next/link";

const Breadcrumbs = ({ link1, link2, link3 }) => {
  return (
    <div className="container">
      <div className="breadcrumbs">
        <p>
          <Link href="/">
            <span className="text_xxs color_ex3">{link1}</span>
          </Link>
          <span className="slace text_xxs color_ex3">/</span>
          <Link href="/news">
            <span className="text_xxs color_ex3"> {link2}</span>
          </Link>
          {/* <span className="slace text_xxs color_ex3">/</span>
          <Link href="/news">
            <span className="text_xxs color_ex3"> {link3}</span>
          </Link> */}
        </p>
      </div>
    </div>
  );
};

export default Breadcrumbs;
