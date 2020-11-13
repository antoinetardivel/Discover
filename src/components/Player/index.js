import React, { useContext } from 'react'

import styles from './Player.module.css'
import PlayerProgressionBar from './PlayerProgressionBar'
import PlayerBtnContainer from './PlayerBtnContainer'
import QueueContainer from './QueueContainer'

import AppContext from '../../AppContext'


const Player = ()=>  {
   
    const context = useContext(AppContext);
    
    

    const handleClickSong = ()=>{
       context.setPlayerOpen(context.isPlayerOpen = false)
    }

    return (
        <div className={styles.player_container}>
            <div onClick={handleClickSong} className={styles.cross_container}>
                <div className={styles.cross1}></div>
                <div className={styles.cross2}></div>
            </div>
            <h1>Like lightning</h1>
            <h2>Fools</h2>
            <div className={styles.player_progress_bar_container}>
                
                <PlayerProgressionBar/>
            </div>
            <PlayerBtnContainer/>
            <QueueContainer/>
        </div>      
    )
}
  


export default Player
