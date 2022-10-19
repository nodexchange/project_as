import { services } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Services = () => (
  <section id="services" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    {/* Label */}
    <div>
      Digital Marketing and Design
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Designed to help you succeed
      </h2>
    </div>
    <div className="w-full flex justify-between md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
    <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Whether you want to identify your target market, need help attaining your
          brand objectives, or need expert help expanding through SEO, content,
          rebranding, or social media strategy, we can help. AS Creative collaborates
          with you to achieve your objectives by offering experienced strategy and a
          valued, results-oriented approach.
        </p>
      </div>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          We deliver personalised and tailored services to small and family-owned
          businesses because we know there is no ‘one-size-fits-all’ approach and you
          are unique.
        </p>
      </div>
    </div>
    

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {services.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Services;
