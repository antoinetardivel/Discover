import React from 'react'
// import ReactDOM from 'react-dom'
import styles from './TopHome.module.css'
import nekfeu from './img/nekfeu.png'
import PlayButton from './img/PlayButton.svg'
import TopHomeShadow from './img/TopHomeShadow.svg'


const TopHome = () => {
  return (
    <div className={styles.block_container}>
      <div className={styles.cover_container}>
        <img className={styles.cover1} src={nekfeu} alt={""}/>
        <img className={styles.cover2} src={nekfeu} alt={""}/>
        <div className={styles.cover3}>
          <img className={styles.cover31} src={nekfeu} alt={""}/>
          <img className={styles.PlayButton} src={PlayButton} alt={""}/>
        </div>
        <img className={styles.cover4} src={nekfeu} alt={""}/>
        <img className={styles.cover5} src={nekfeu} alt={""}/>
      </div>
      <img className={styles.shadow} src={TopHomeShadow} alt={""}/>
    </div>
  )
  
}

export default TopHome