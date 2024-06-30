import React from 'react'
import booking from "../../assets/booking.png";
import styles from "./style.module.scss"

const UpcomingDetails = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.headingWrapper}>
                <p className={styles.heading}>Upcoming Examinations</p>
                <p className={styles.subHeading}>Enquire about the examination & register for the exams</p>
            </div>
            <div className={styles.booking}>
                <img src={booking} width={54} height={54} alt="img"/>
                <div>
                    <p className={styles.bookingHeading}>02th October 2014</p>
                    <p className={styles.bookingSubheading}>Level 1 exam</p>
                </div>
            </div>
            <div className={styles.booking}>
                <img src={booking} width={54} height={54} alt="img"/>
                <div>
                    <p className={styles.bookingHeading}>Nov-Dec 2016</p>
                    <p className={styles.bookingSubheading}>Level 2 Lorem Ipsum Lorem Ipsum</p>
                </div>
            </div>
            <div className={styles.booking}>
                <img src={booking} width={54} height={54} alt="img"/>
                <div>
                    <p className={styles.bookingHeading}>Ongoing this year</p>
                    <p className={styles.bookingSubheading}>Level 3 (Grad)</p>
                </div>
            </div>
        </div>
    )
}

export default UpcomingDetails