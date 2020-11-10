import React from 'react'
// import ReactDOM from 'react-dom'
import styles from './CoverBlur.module.css'
import nekfeu from './img/nekfeu.png'


const CoverBlur = () => {
  return (
    <div className={styles.block_container}>
      <img className={styles.cover_image} src={nekfeu} alt={""}/>
    </div>
  )
  
}

export default CoverBlur