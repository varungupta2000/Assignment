import React from 'react';
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import LinkedIn from "../../assets/linkedin.png";
import Quora from "../../assets/quora.png";
import YouTube from "../../assets/youtube.png";
import location from "../../assets/location.png";
import time from "../../assets/time.png";
import train from "../../assets/train.png";

import styles from "./style.module.scss";

const Footer = () => {
    return (
        <div>
            <div className={styles.footer}>
                <div>
                    <p className={styles.heading}>Contact Us</p>
                    <p className={styles.text}>Address: amet, consetetur sadipscing elitr, sed diam</p>
                    <p className={styles.text}>Email id: eirmod tempor invidunt ut labore et dolore</p>
                    <p className={styles.text}>Phone no: 123456789</p>
                </div>
                <div>
                    <p className={styles.heading}>Follow Us</p>
                    <div className={styles.images}>
                        <img src={Facebook} width={20} height={32} />
                        <img src={LinkedIn} width={32} height={32} />
                        <img src={Instagram} width={36} height={32} />
                        <img src={Twitter} width={38} height={32} />
                        <img src={YouTube} width={48} height={33} />
                        <img src={Quora} width={35} height={32} />
                    </div>
                </div>
                <div>
                    <p className={styles.heading}>Head Office</p>
                    <div className={styles.textWrapper}>
                        <img src={location} width={17} height={25} />
                        <p className={styles.headOfficeText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                    </div>
                    <div className={styles.textWrapper}>
                        <img src={time} width={19} height={23} />
                        <p className={styles.headOfficeText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                    </div>
                    <div className={styles.textWrapper}>
                        <img src={time} width={19} height={23} />
                        <p className={styles.headOfficeText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                    </div>
                    <div className={styles.textWrapper}>
                        <img src={train} width={19} height={26} />
                        <p className={styles.headOfficeText}>Lorem ipsum asd asdsaweeq Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <div>
                <p className={styles.copyright}>© 2021 All Rights Reserved. Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer