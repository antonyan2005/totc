import { FaRegCalendarAlt } from 'react-icons/fa';
import { RiBarChartBoxFill } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';
import styles from '../../CSS/Header/InformationAraundOfGirl.module.css';
import logo from './ellipse.png';
import { NavLink } from 'react-router-dom';

function InformationAraundOfGirl() {
  return (
    <div className={styles.main}>
      <div className={styles.messages}>
        <div className={styles.m1}>
          <RiBarChartBoxFill className={styles.icon} />
        </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.m1}>
          <div className={styles.iconDiv}>
            <FaRegCalendarAlt className={styles.icon} />
          </div>
          <div className={styles.mainDiv}>
            <div className={styles.title}>250k</div>
            <div className={styles.text}>Assisted Student</div>
          </div>
        </div>
      </div>
      <div className={styles.messages}>
        {/* <div className={styles.m1}></div> */}
      </div>
      <div className={styles.messages}>
        <div className={styles.m1}>
          <div className={styles.iconDiv}>
            <GrMail className={styles.icon} />
          </div>
          <div className={styles.mainDiv}>
            <div className={styles.title}>Congratulations</div>
            <div className={styles.text}>Your admission completed</div>
          </div>
        </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.aboutUser}>
          <div className={styles.m1}>
            <div className={styles.iconDiv}>
              <img src={logo} alt={`${logo}`} />
              <div className={styles.online}></div>
            </div>
            <div className={styles.mainDiv}>
              <div className={styles.title}>Congratulations</div>
              <div className={styles.text}>Your admission completed</div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <NavLink className={styles.button}>Join Now</NavLink>
          </div>
        </div>
      </div>
      <div className={styles.messages}>
        {/* <div className={styles.m1}></div> */}
      </div>
    </div>
  )
}

export default InformationAraundOfGirl
