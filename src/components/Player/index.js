import React, {Component} from 'react'

import styles from './Player.module.css'
import profilImg from './img/profil.jpg'


class Player extends React.Component {
   
  
    render(){
        return (
            <div className={styles.player_container}>
                <h1>Like lightning</h1>
                <h2>Fools</h2>
                <div className={styles.player_progress_bar_container}>
                    
                </div>
            </div>

                
        )
    }
  
}

export default Player
