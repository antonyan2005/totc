import { NavLink } from 'react-router-dom'
import styles from '../../CSS/Main/WhatIsTotc.module.css'

function WhatIsTotc() {
    return (
        <div className={styles.whatIsTotc}>
            <div className={styles.title}>
                What is <span className={styles.green}>TOTC?</span>
            </div>
            <div className={styles.text}>
                TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
            </div>
            <div className={styles.images}>
                <div className={styles.imgDiv}>
                    <div className={styles.onImg}>
                        <div className={styles.onImgTitle}>FOR INSTRUCTORS</div>
                        <div className={styles.wrapper}>
                            <NavLink className={styles.onImgBtn}>Start a class today</NavLink>
                        </div>
                    </div>
                </div>
                <div className={styles.imgDiv}>
                    <div className={styles.onImg}>
                        <div className={styles.onImgTitle}>FOR STUDENTS</div>
                        <div className={styles.wrapper}>
                            <NavLink className={styles.onImgBtn}>Enter access code</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIsTotc
