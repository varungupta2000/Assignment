import React, { memo, useState } from 'react';
import plusIcon from "../../assets/plusIcon.png";
import minusIcon from "../../assets/minusIcon.png";

import styles from './style.module.scss';
import { FAQData } from './FAQData';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.heading}>FAQ</p>
                {FAQData.map((item, index) => (
                    <div key={index}>
                        <p
                            className={styles.question}
                            onClick={() => handleClick(index)}
                            style={{ color: activeIndex === index ? "#12406F" : "#525252", borderColor: activeIndex === index ?"#89a1b7":"#b3b3b3" }}
                        >
                            <span>{item.questions}</span>
                            {activeIndex !== index && <img src={plusIcon} alt="Plus Icon" width={36} height={36}/>}
                            {activeIndex === index && <img src={minusIcon} alt="Minus Icon" width={36} height={36}/>}
                        </p>
                        {activeIndex === index && <p className={styles.answer}>{item.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(FAQ);
