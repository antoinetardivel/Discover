import React from 'react'
import styles from './Menu.module.css'

import pochette from './img/test_pochette.svg'



const MenuAudioPlayer = () => {
   
  
   
    return (
      <div className={styles.audio_player_container}>
          <img src={pochette} />
          <div className={styles.music_artist_container}>
              <p>In Lights</p>
              <p>We were promised jetpacks</p>
          </div>
      </div>
  
          
    )
    
  }


  export default MenuAudioPlayer