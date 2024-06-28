import React from 'react'
import styles from "./style.module.scss";
import { NumbersData } from './NumbersData';

const Numbers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <div className={styles.dataWrapper}>
        {NumbersData.map((item) => <div >
          <p className={styles.title}>{item.title}</p>
          <p className={styles.numbers}>{item.numbers}</p>
          <p className={styles.subTitle}>{item.subTitle}</p>
          <p className={styles.description}>{item.description}</p>
        </div>)}
      </div>
    </div>
    </div>
  )
}

export default Numbers