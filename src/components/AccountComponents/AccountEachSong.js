import React, {Component} from 'react'
import profilImg from './img/profil.jpg'
import styles from './Account.module.css'
import Like from '../LikePause/Like'



const AccountEachSong = () => {
    
    function Eachsong(props) {
        return(
            <div className={styles.account_each_song_container}>
                <div className={styles.account_song_artiste_container}>
                    <img className={styles.account_music_img} src={props.img}/>
                    <div>
                        <p>{props.title}</p>
                        <p>{props.artist}</p>
                    </div>
                </div>
                <div  className={styles.account_ecoute_like_container}>
                    <p>{props.ecoute}</p>
                    <Like />
                </div>
            </div>
        )
    }
 

    return (
        <div className={styles.account_song_container}>
            <Eachsong img={profilImg} title="Sara" artist="artist" ecoute="180" />
            <Eachsong img={profilImg} title="Cahal" artist="artist" ecoute="180" />
            <Eachsong img={profilImg} title="Edite" artist="artist" ecoute="180" />
        </div>

        
    )
    
    
  }


  export default AccountEachSong