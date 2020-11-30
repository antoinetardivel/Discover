import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ArtistBubble.module.css'


const ArtistBubble = (prop) => {
  let link = '/Artiste/' + prop.artistId
  return (
    <div className={styles.block_container}>
      <Link to={link}><img className={styles.ArtistPhoto} src={prop.src} alt={""}/></Link>
      <p className={styles.ArtistName}><Link className={styles.ArtistName} to={link}>{prop.artistName}</Link></p>
    </div>
  )
}

export default ArtistBubble