import React, { useContext } from 'react'

import styles from './Player.module.css'
import PlayerProgressionBar from './PlayerProgressionBar'
import PlayerBtnContainer from './PlayerBtnContainer'
import QueueContainer from './QueueContainer'

import AppContext from '../../AppContext'


const Player = ()=>  {
   
    const context = useContext(AppContext);
    
    

    const handleClickSong = ()=>{
        let player = document.getElementById('playerContainer');
        player.style.bottom = -100 + "vh";
        setTimeout(()=>{
               context.setPlayerOpen(context.isPlayerOpen = false)
        },600)
    }

    return (
        <div id="playerContainer" className={styles.player_container}>
            <div onClick={handleClickSong} className={styles.cross_container}>
                <div className={styles.cross1}></div>
                <div className={styles.cross2}></div>
            </div>
            <h1>{context.title}</h1>
            <h2>{context.artist}</h2>
            <div className={styles.player_progress_bar_container}>
                
                <PlayerProgressionBar imgAlbum={context.img}/>
            </div>
            <PlayerBtnContainer/>
            <QueueContainer/>
        </div>      
    )
}
  


export default Player
