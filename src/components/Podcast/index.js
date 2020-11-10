import React from 'react'
// import ReactDOM from 'react-dom'
import styles from './Podcast.module.css'
import nekfeu from './img/nekfeu.png'


const Podcast = (prop) => {
  return (
    <div className={styles.block_container}>
      <div className={styles.TopPart_container}>
        <div className={styles.left_container}>
          <div className={styles.TopTextContainer}>
            <p className={styles.NameArtist}>{prop.artist}</p>
            <p className={styles.TimePodcast}>{prop.time}</p>
          </div>
          <p className={styles.NamePodcast}>{prop.name}</p>
        </div>
        <img className={styles.cover} src={prop.src} alt={""}/>
      </div>
      <div className={styles.Bar}></div>
    </div>
  )
}

export default Podcast