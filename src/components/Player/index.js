import React from 'react'

import styles from './Player.module.css'
import PlayerProgressionBar from './PlayerProgressionBar'
import PlayerBtnContainer from './PlayerBtnContainer'


class Player extends React.Component {
   
  
    render(){
        return (
            <div className={styles.player_container}>
                <h1>Like lightning</h1>
                <h2>Fools</h2>
                <div className={styles.player_progress_bar_container}>
                   
                    <PlayerProgressionBar/>
                </div>
                <PlayerBtnContainer/>
            </div>      
        )
    }
  
}

export default Player
