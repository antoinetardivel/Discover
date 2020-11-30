import React from 'react'
// import ReactDOM from 'react-dom'
import styles from './TopHome.module.css'
import nekfeu from './img/nekfeu.png'
import PlayButton from './img/PlayButton.svg'
import TopHomeShadow from './img/TopHomeShadow.svg'


const TopHome = (prop) => {
  return (
    <div className={styles.block_container}>
      <div className={styles.cover_container}>
        <img className={styles.cover1} src={prop.src1} alt={""}/>
        <img className={styles.cover2} src={prop.src2} alt={""}/>
        <div className={styles.cover3}>
          <img className={styles.cover31} src={prop.src3} alt={""}/>
          <img className={styles.PlayButton} src={PlayButton} alt={""}/>
        </div>
        <img className={styles.cover4} src={prop.src4} alt={""}/>
        <img className={styles.cover5} src={prop.src5} alt={""}/>
      </div>
      <img className={styles.shadow} src={TopHomeShadow} alt={""}/>
    </div>
  )
  
}

export default TopHome