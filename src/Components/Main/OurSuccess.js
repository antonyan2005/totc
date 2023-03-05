import styles from '../../CSS/Main/OurSuccess.module.css'

function OurSuccess() {
    return (
        <div className={styles.ourSuccessDiv}>
            <div className={styles.text}>
                <h1>Our Success</h1>
                <p>
                    Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
                </p>
            </div>
            <div className={styles.numbers}>
                <div className={styles.number}>
                    <div className={styles.num}>15k+</div>
                    <div className={styles.title}>Students</div>
                </div>
                <div className={styles.number}>
                    <div className={styles.num}>75%</div>
                    <div className={styles.title}>Total success</div>
                </div>
                <div className={styles.number}>
                    <div className={styles.num}>35</div>
                    <div className={styles.title}>Main questions</div>
                </div>
                <div className={styles.number}>
                    <div className={styles.num}>26</div>
                    <div className={styles.title}>Chief experts</div>
                </div>
                <div className={styles.number}>
                    <div className={styles.num}>16</div>
                    <div className={styles.title}>Years of experience</div>
                </div>
            </div>
        </div>
    )
}

export default OurSuccess
