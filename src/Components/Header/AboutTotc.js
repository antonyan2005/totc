import { FaPlay } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from '../../CSS/Header/AboutTotc.module.css'

function AboutTotc() {
  return (
    <div className={styles.aboutTotc}>
      <div className={styles.title}>
        <p>Studying <span>Online is now much easier</span></p>
      </div>
      <div className={styles.main}>
        <p>TOTC is an interesting platform that will teach you in more an interactive way</p>
      </div>
      <div className={styles.btns}>
        <div className={styles.wrapper}>
          <NavLink className={styles.button}>Join for free</NavLink>
        </div>
        <div className={styles.icon} title="Watch how it works">
          <FaPlay className={styles.triangle} />
        </div>
      </div>
    </div>
  )
}

export default AboutTotc
