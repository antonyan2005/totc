import { NavLink } from 'react-router-dom'
import styles from '../../CSS/Main/AboutClassroom.module.css'

function AboutClassroom() {
    return (
        <div className={styles.container}>
            <div className={styles.textDiv}>
                <div className={styles.background}>
                    <div className={styles.bigCircle}></div>
                    <div className={styles.littleCircle}></div>
                </div>
                <div className={styles.textMain}>
                    <div className={styles.title}>
                        Everything you can do in a physical classroom, <span className={styles.green}>you can do with TOTC</span>
                    </div>
                    <div className={styles.text}>
                        TOTC's school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
                    </div>
                    <div className={styles.link}>
                        <NavLink>Learn more</NavLink>
                    </div>
                </div>
            </div>
            <div className={styles.imgDiv}>
                <div className={styles.background}>
                    <div className={styles.littleSquere}></div>
                    <div className={styles.bigSquere}></div>
                </div>
                <div className={styles.imgMain}></div>
            </div>
        </div>
    )
}

export default AboutClassroom
