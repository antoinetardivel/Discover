import React, { useContext } from 'react'
import styles from './Account.module.css'
import Like from '../LikePause/Like'
import AppContext from '../../AppContext'



function EachsongComponent(props) {

    const context = useContext(AppContext);
    
    

    const handleClickSong = ()=>{
       context.setPlayerOpen(context.isPlayerOpen = true)
    }


    return(
        <div onClick={handleClickSong} className={styles.account_each_song_container}>
            <div className={styles.account_song_artiste_container}>
                <img className={styles.account_music_img} src={props.img} alt=""/>
                <div className={styles.account_title_artist_container}>
                    <p>{props.title}</p>
                    <p>{props.artist}</p>
                </div>
            </div>
            <div  className={styles.account_ecoute_like_container}>
                <p>{props.ecoute} écoutes</p>
                <Like />
            </div>
        </div>  
    )
}


export default EachsongComponent