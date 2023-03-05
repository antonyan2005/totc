import { useState } from 'react'
import { HiDocumentText } from 'react-icons/hi'
import { BiCalendar } from 'react-icons/bi'
import styles from '../../CSS/Main/AllInOne.module.css'
import BigSpace from './BigSpace'

function AllInOne() {
    const [space, setSpace] = useState(490);
    const windowResize = () => {
        if (window.innerWidth <= 1200) {
            setSpace(300);
        } else if (window.innerWidth > 1200) {
            setSpace(490);
        }
    }
    window.onresize = windowResize;
    window.onload = windowResize;

    return (
        <>
            <div className={styles.AllInOne}>
                <div className={styles.title}>
                    <span>All-In-One </span>
                    <span className={styles.greenText}>Cloud Software.</span>
                </div>
                <div className={styles.text}>
                    TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.iconDocument}>
                            <HiDocumentText className={styles.icon} />
                        </div>
                        <div className={styles.cardMain}>
                            <div className={styles.cardTitle}>
                                Online Billing, Invoicing, & Contracts
                            </div>
                            <div className={styles.cardText}>
                                Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconCalendar}>
                            <BiCalendar className={styles.icon} />
                        </div>
                        <div className={styles.cardMain}>
                            <div className={styles.cardTitle}>
                                Easy Scheduling & Attendance Tracking
                            </div>
                            <div className={styles.cardText}>
                                Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconGroup}>
                            <HiDocumentText className={styles.icon} />
                        </div>
                        <div className={styles.cardMain}>
                            <div className={styles.cardTitle}>
                                Online Billing, Invoicing, & Contracts
                            </div>
                            <div className={styles.cardText}>
                                Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BigSpace space={space} />
        </>
    )
}

export default AllInOne
