import React, {Component} from 'react'

import styles from './Player.module.css'
import PlayerProgressionBar from './PlayerProgressionBar'


class Player extends React.Component {
   
  
    render(){
        return (
            <div className={styles.player_container}>
                <h1>Like lightning</h1>
                <h2>Fools</h2>
                <div className={styles.player_progress_bar_container}>
                    <p><span>01 : 52</span> | 03 : 35</p>
                    <PlayerProgressionBar/>
                </div>
            </div>

                
        )
    }
  
}

export default Player
