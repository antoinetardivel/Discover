import React, { useContext, useEffect } from 'react'

import styles from './Player.module.css'
import PlayerProgressionBar from './PlayerProgressionBar'
import PlayerBtnContainer from './PlayerBtnContainer'
import QueueContainer from './QueueContainer'


import AppContext from '../../AppContext'
import { SpotifyContext } from '../SpotifyProvider'


const Player = ()=>  {
   
    const context = useContext(AppContext);

    const spotifyContext = useContext(SpotifyContext);

    // let audio = new Audio(context.music);
    // audio.spotifyApi.Play();


    console.log(context.music)
    console.log(spotifyContext.deviceId)

    // useEffect(() => {
        const data = {
            "device_Id": spotifyContext.deviceId,
                "uris": [context.music] 
        }    
        spotifyContext.spotifyApi.play(data)
        .then(function() {  console.log('play')      })  
    // },[context.music])
        

           
    
    

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
