import React, { memo, useState } from 'react';
import NewsletterImage from "../../assets/newsletter.png";
import Subscribe from "../../assets/subcribe.png";
import styles from './style.module.scss';

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const handleClick = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handleSubmit = () => {
        if (email === "" || !email.includes('@')) {
            alert("Please enter a valid email address");
            return;
        }
        alert(`Thank you for subscribing to our newsletter. Your email address is: ${email}`);
        setEmail('');
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.leftContainer}>
                    <p className={styles.heading}>Subscribe</p>
                    <p className={styles.subHeading}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                    <div className={styles.inputContainer}>
                        <input type='email' placeholder='Enter your Emai Address' value={email} className={styles.input} onChange={handleClick}>
                        </input>
                        <button type="button" className={styles.subscribeButton} onClick={handleSubmit}>
                            <span>Subcribe Now</span>
                            <img src={Subscribe} className={styles.subscribeImage} />
                        </button>
                    </div>
                </div>
                <img src={NewsletterImage} className={styles.image} />
            </div>
        </div>
    )
}

export default memo(NewsLetter);