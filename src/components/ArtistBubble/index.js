import React from 'react'
// import ReactDOM from 'react-dom'
import styles from './ArtistBubble.module.css'


const ArtistBubble = (prop) => {
  return (
    <div className={styles.block_container}>
      <img className={styles.ArtistPhoto} src={prop.src} alt={""}/>
      <p className={styles.ArtistName}>{prop.name}</p>
    </div>
  )
}

export default ArtistBubble