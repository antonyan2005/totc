import Header from "../Header/Header"
import Main from "../Main/Main"
import styles from '../../CSS/Pages/Home.module.css'

function Home() {
  return (
    <div className={styles.home}>
        <Header />
        <Main />
    </div>
  )
}

export default Home
