import React, {Component} from 'react'
import styles from './Menu.module.css'
import MenuProgressBar from './MenuProgressBar'
import Like from '../LikePause/Like'
import Play from '../LikePause/Play'

import pochette from './img/test_pochette.svg'





class MenuAudioPlayer extends Component{

    
    render(){
        
    
        return (
            <div className={styles.audio_player_container}>
                <img className={styles.audio_player_img} src={pochette} alt="" />
                <div className={styles.music_artist_like_pause_container}>
                    <div className={styles.music_artist_container}>
                        <p>In Lights</p>
                        <p>We were promised jetpacks</p>
                    </div>
                    <div className={styles.like_pause_container}>
                        <Like />
                        <Play />
                    </div>
                    <MenuProgressBar/>
                </div>
            </div>
    
            
    
        )
    }
    
  }


  export default MenuAudioPlayer