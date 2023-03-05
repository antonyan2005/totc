import { NavLink } from 'react-router-dom'
import styles from '../../CSS/Header/NavBar.module.css'
import { HiMenu } from 'react-icons/hi'
function NavBar() {
    return (
        <div className={styles.navbar}>
            <NavLink to={'/'}>
                <div className={styles.logo}>
                    <div className={styles.log}>
                        <div className={styles.totc}>TOTC</div>
                        <div className={styles.pol}></div>
                    </div>
                </div>
            </NavLink>
            <div className={styles.right}>
                <nav>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/'}>Courses</NavLink>
                    <NavLink to={'/'}>Blog</NavLink>
                    <NavLink to={'/'}>About Us</NavLink>
                </nav>
                <div className={styles.buttons}>
                    <div className={styles.wrapper}>
                        <NavLink className={styles.button}>Login</NavLink>
                    </div>
                    <div className={styles.wrapper}>
                        <NavLink className={styles.button}>Sign Up</NavLink>
                    </div>
                </div>
                <HiMenu className={styles.menuButton} />
            </div>
        </div>
    )
}

export default NavBar
