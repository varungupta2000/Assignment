import React, { useEffect, useState } from 'react';
import Search from "../../assets/search.png";
import downArrow from "../../assets/arrowdown.png";
import styles from './style.module.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logo}>LOGO</div>
                <div className={styles.rightContainer}>
                    {screenWidth > 1290 &&
                        <>
                            <div className={styles.navLinks}>
                                <div className={styles.navlink}>Qualifications <img src={downArrow} alt="downArrow" /></div>
                                <div className={styles.navlink}>Organizations <img src={downArrow} alt="downArrow" /></div>
                                <div className={styles.navlink}>Research & Analysis <img src={downArrow} alt="downArrow" /></div>
                                <div className={styles.navlink}>Lorem ipsum <img src={downArrow} alt="downArrow" /></div>
                                <div className={styles.navlink}>Lorem ipsum <img src={downArrow} alt="downArrow" /></div>
                            </div>
                            <img src={Search} alt="Search" />
                            <button className={styles.enrolmentbtn}>Enrolment</button>
                        </>}
                </div>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    {isOpen &&
                        <div className={styles.navLinksMobile}>
                            <div className={styles.navlink}>Qualifications <img src={downArrow} alt="downArrow" /></div>
                            <div className={styles.navlink}>Organizations <img src={downArrow} alt="downArrow" /></div>
                            <div className={styles.navlink}>Research & Analysis <img src={downArrow} alt="downArrow" /></div>
                            <div className={styles.navlink}>Lorem ipsum <img src={downArrow} alt="downArrow" /></div>
                            <div className={styles.navlink}>Lorem ipsum <img src={downArrow} alt="downArrow" /></div>
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
