import React from 'react'
import Arrow from "../../assets/rightArrow.png";
import styles from "./style.module.scss"
import { CardData } from './CardsData';

const Cards = () => {
    return (

        <div className={styles.wrapper}>
            <div className={styles.cardWrapper}>
                {CardData.map((item) => <div className={styles.card}>
                    <p className={styles.heading}>{item.title}</p>
                    <p className={styles.description}>{item.description}</p>
                    <p className={styles.button} onClick={() => alert("Button Clicked")}>
                        Know More
                        <img src={Arrow} className={styles.image} />
                    </p>
                </div>)}

            </div>

        </div>
    )
}

export default Cards