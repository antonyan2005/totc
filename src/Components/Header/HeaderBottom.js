import AboutTotc from "./AboutTotc"
import styles from '../../CSS/Header/HeaderBottom.module.css'
import InformationAraundOfGirl from "./InformationAraundOfGirl"
function HeaderBottom() {
    return (
        <div className={styles.headerBottom}>
            <AboutTotc />
            <InformationAraundOfGirl />
        </div>
    )
}

export default HeaderBottom
