import digitalJournal from "../images/digitalJournal.webp";
import styles from "./HeroSection.module.css";
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className={styles.heroPart}>
      <div className={`${styles.main} ${styles.fontFamily}`}>
        <h1>Your Thoughts, Your Rewards</h1>
        <h3>
          Transform your daily journaling into points that reward your journey!
        </h3>
        <Link to="/journal">
          <button>Start Writing</button>
        </Link>
      </div>

      <div className={styles.imageBox}>
        <img src={digitalJournal} className = {styles.heroImage} alt="journaling imge" />
      </div>
    </section>
  );
}
export default HeroSection;
