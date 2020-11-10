import React from 'react'
// import ReactDOM from 'react-dom'
import CoverBlur from 'components/CoverBlur'
import styles from './TopHome.module.css'
import nekfeu from './img/nekfeu.png'


const TopHome = () => {
  return (
    <div className={styles.block_container}>
      <CoverBlur />
      <div className={styles.rounded_container}>
        <h1>Le Top 10</h1>
        <div className={styles.cover}>
          <img id="cover1" className={styles.cover_image} src={nekfeu} alt={""}/>
        </div>
        <div className={styles.cover}>
          <img id="cover2" className={styles.cover_image} src={nekfeu} alt={""}/>
        </div>
        <div className={styles.cover}>
          <img id="cover3" className={styles.cover_image} src={nekfeu} alt={""}/>
        </div>
        <div className={styles.cover}>
          <img id="cover4" className={styles.cover_image} src={nekfeu} alt={""}/>
        </div>
        <div className={styles.cover}>
          <img id="cover5" className={styles.cover_image} src={nekfeu} alt={""}/>
        </div>
      </div>
    </div>
  )
  
}

export default TopHome