import React from 'react'
import Styles from './MusicIcon.module.css'



const MusicIcon = (prop) => {
    
  return (
      <div>
        <div className={Styles.imageContener} id={prop.id}>
            <img src={prop.src} className={Styles.image} />
        </div>
        <h3 className={Styles.musicName}>{prop.musicName}</h3>
        <h4 className={Styles.artistName}>{prop.artistName}</h4>
      </div>
    
  )
}

export default MusicIcon