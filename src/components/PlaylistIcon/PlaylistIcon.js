import React from 'react'
import Styles from './PlaylistIcon.module.css'



const PlaylistIcon = (props) => {

   
  return (
        <div className={Styles.each_playlist}>
            <img src={props.UrlImage} alt={props.name} className={Styles.image} />
            <p className={Styles.desc}>{props.PlaylistName}</p>
        </div>
    ) 
}

export default PlaylistIcon