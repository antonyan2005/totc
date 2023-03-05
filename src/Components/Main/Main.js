import styles from '../../CSS/Main/Main.module.css'
import AboutClassroom from './AboutClassroom'
import AllInOne from './AllInOne'
import OurSuccess from './OurSuccess'
import WhatIsTotc from './WhatIsTotc'

function Main() {
  return (
    <main className={styles.main}>
      <OurSuccess />
      <AllInOne />
      <WhatIsTotc />
      {/* <AboutClassroom /> */}
    </main>
  )
}

export default Main
