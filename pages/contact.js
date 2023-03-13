import styles from "../styles/pages/contact.module.scss";

//import components
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumbs from "../components/breadcrumbs";
import { useForm } from "react-hook-form";
import RightArrow from "../public/img/home/right-arrow.svg";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};
  // console.log(errors);

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Mentoring young individuals to learn, grow and become better decision makers with extensive and useful knowledge.
"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main className={`${styles.contact_page} padd_t`}>
        <Breadcrumbs link1="Home" link2="Contact" />
        <div className="container pb">
          <div className={`${styles.contact_section}`}>
            <div className={`${styles.contact_info}`}>
              <div className="headtitle_btn headtitle_b_p">
                <h2 className="text_xxxl text_500 font_primary color_ex3 heading_title">
                  Get in Touch
                </h2>
              </div>
              <p className={`${styles.para} text_sm color_ex3`}>
                Happy to hear from you. To get in touch, kindly fill in the
                form.
              </p>
            </div>
            <div className={`${styles.contact_form}`}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`${styles.form_group}`}>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("Name", { required: true, maxLength: 79 })}
                  />
                  {errors.Name && (
                    <p className={`${styles.errors_msg}`}>
                      This field is required
                    </p>
                  )}
                </div>
                <div className={`${styles.form_group}`}>
                  <input
                    type="text"
                    placeholder="Contact No."
                    {...register("Contact", {
                      required: true,
                      minLength: 10,
                      maxLength: 10,
                    })}
                  />
                  {errors.Contact && (
                    <p className={`${styles.errors_msg}`}>
                      This field is required
                    </p>
                  )}
                </div>
                <div className={`${styles.form_group}`}>
                  <input
                    type="email"
                    placeholder="Email Id"
                    {...register("Email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  {errors.Email && (
                    <p className={`${styles.errors_msg}`}>
                      This field is required
                    </p>
                  )}
                </div>
                <div className={`${styles.form_group}`}>
                  <textarea
                    className={styles.input_field}
                    name="message"
                    placeholder="Message"
                    rows="5"
                    {...register("message", {
                      required: true,
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className={`${styles.errors_msg}`}>
                      This field is required
                    </p>
                  )}
                </div>
                <div className={`${styles.submit_button}`}>
                  <div className={`${styles.button}`}>
                    <input type="submit" />
                    <img
                      src={RightArrow.src}
                      className={`${styles.right_arrow}`}
                      alt=""
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
