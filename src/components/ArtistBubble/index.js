import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ArtistBubble.module.css'


const ArtistBubble = (prop) => {
  return (
    <div className={styles.block_container}>
      <img className={styles.ArtistPhoto} src={prop.src} alt={""}/>
      <p className={styles.ArtistName}><Link className={styles.ArtistName} to={{pathname: '/Artiste', aboutProps:{ artistName: prop.artistName, imageArtist: prop.imageArtist } }}>{prop.artistName}</Link></p>
    </div>
  )
}

export default ArtistBubble