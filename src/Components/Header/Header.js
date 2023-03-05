import styles from '../../CSS/Header/Header.module.css'
import HeaderBottom from './HeaderBottom'
import NavBar from './NavBar'
function Header() {
  return (
    <header className={styles.header}>
      <NavBar />
      <HeaderBottom />
    </header>
  )
}

export default Header
