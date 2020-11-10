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
 

    return (
        <div className={styles.account_song_container}>
            <Eachsong img={profilImg} title="Lonely hunter" artist="Foals" ecoute="100" />
            <Eachsong img={profilImg} title="Devil that I know" artist="Jacob Banks" ecoute="180" />
            <Eachsong img={profilImg} title="Quiet little voices" artist="WWPJ" ecoute="180" />
            <Eachsong img={profilImg} title="Domino" artist="Johnny Vegas" ecoute="180" />
            <Eachsong img={profilImg} title="Je crois qu'elle m'aime" artist="Johnny Vegas" ecoute="180" />
        </div>

        
    )
    
    
  }


  export default AccountEachSong