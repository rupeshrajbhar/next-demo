import styles from "../styles/components/Styleguide.module.scss";

const StyleGuide = () => {
  const colors = ["primary", "secondary"];
  return (
    <div className={styles.styleguide}>
      {/* ============ fonts ================ */}
      <h2 className="text_xxxxl font_primary">Fonts</h2>
      <section>
        <p className="text_xxxxl font_primary">86 - paytone font</p>
      </section>

      {/* ============ text colors ================ */}
      <h2 className="text_xxxxl font_primary">text colors</h2>
      <section>
        {colors.map((color, ind) => {
          return (
            <p key={ind} className={`text_reg font_secondary color_${color}`}>
              color {color}
            </p>
          );
        })}
      </section>

      {/* ============ bg colors ================ */}
      <h2 className="text_xxxxl font_primary">colors</h2>
      <section>
        <div className={styles.color_palette}>
          {colors.map((color, ind) => {
            return (
              <div
                key={ind}
                className={`${styles.cp_item} text_sm font_secondary bg_${color}`}
              >
                bg color {color}
              </div>
            );
          })}
        </div>
      </section>
      {/* ============ bg colors ================ */}
      <h2 className="text_xxxxl font_primary">buttons</h2>
      <section>
        <button>About Dr. Rajan</button>
        <button>About Dr. Rajan</button>
      </section>
    </div>
  );
};

export default StyleGuide;
