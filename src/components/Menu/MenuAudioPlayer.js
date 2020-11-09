import React from 'react'
import styles from './Menu.module.css'
import MenuProgressBar from './MenuProgressBar'

import pochette from './img/test_pochette.svg'
import heart from './img/heart.svg'
import whiteHeart from './img/white_heart.svg'
import pause from './img/pause.svg'
import play from './img/play.svg'



const MenuAudioPlayer = () => {

    const changeHeart = () => {
        const heartImg = document.getElementById('heart');
      
        if(heartImg.src.includes(heart)){
            heartImg.setAttribute('src', whiteHeart);
        }
        else{
            heartImg.setAttribute('src', heart);
        }
    }

    const changePause = () => {
        const pauseImg = document.getElementById('pause');
      
        if(pauseImg.src.includes(pause)){
            pauseImg.setAttribute('src', play);
        }
        else{
            pauseImg.setAttribute('src', pause);
        }
    }
   
    return (
        <div className={styles.audio_player_container}>
            <img className={styles.audio_player_img} src={pochette} />
            <div className={styles.music_artist_like_pause_container}>
                <div className={styles.music_artist_container}>
                    <p>In Lights</p>
                    <p>We were promised jetpacks</p>
                </div>
                <div className={styles.like_pause_container}>
                    <img id="heart" onClick={()=> changeHeart()} src={heart} />
                    <img id="pause" onClick={()=> changePause()} src={pause} />
                </div>
                <MenuProgressBar/>
            </div>
        </div>
  
          
    )
    
  }


  export default MenuAudioPlayer