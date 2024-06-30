import React, { useEffect, useState } from 'react';
import Search from "../../assets/search.png";
import downArrow from "../../assets/arrowdown.png";
import styles from './style.module.scss';
import NavbarMobile from './MobileHeader';
import NavbarDesktop from './DesktopHeader';

const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>{screenWidth<1290?<NavbarMobile/>:<NavbarDesktop/>}</>
    );
};

export default Navbar;
