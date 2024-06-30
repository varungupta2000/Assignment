import Search from "../../../assets/search.png";
import downArrow from "../../../assets/arrowdown.png";
import styles from '../style.module.scss';

const NavbarDesktop = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logo}>LOGO</div>
                <div className={styles.rightContainer}>
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
                        </>
                </div>
            </div>
        </div>
    );
};

export default NavbarDesktop;
