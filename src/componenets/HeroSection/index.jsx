import React, { useState } from 'react'
import Subscribe from "../../assets/subcribe.png";
import styles from "./style.module.scss";
import { HeroSectionData } from './HeroSectionData';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.textWrapper}>
                    <p className={styles.heading}>{HeroSectionData[currentSlide].title}</p>
                    <p className={styles.description}>
                        {HeroSectionData[currentSlide].description}
                    </p>
                    <button onClick={()=>alert("Button Clicked")} type='button'  className={styles.button}>
                        Know More 
                        <img src={Subscribe} className={styles.subscribeImage} alt="img"/>
                    </button>
                </div>
                <img src={HeroSectionData[currentSlide].image} className={styles.image} />
                 <div className={styles.indicators}>
                    {HeroSectionData.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicator} ${index === currentSlide && styles.active}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroSection