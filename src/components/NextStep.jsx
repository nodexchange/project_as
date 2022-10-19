import { computer } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const NextStep = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Take the next step to unlock the
potential of your brands' growth
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Still need a little convincing? See what past and current
clients are saying about us!
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={computer} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default NextStep;
