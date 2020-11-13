import React from 'react'
import profilImg from './img/profil.jpg'
import styles from './Account.module.css'
import PlayerAppearOnclick from '../PlayerAppearOnclick/index'
import Eachsong from './EachSongComponent'
// import Player from '../Player'



const AccountEachSong = () => {
    

    return (
        <div className={styles.account_song_container}>
            <PlayerAppearOnclick/>

            
            <Eachsong img={profilImg} title="Lonely hunter" artist="Foals" ecoute="100" />
            <Eachsong img={profilImg} title="Devil that I know" artist="Jacob Banks" ecoute="180" />
            <Eachsong img={profilImg} title="Quiet little voices" artist="WWPJ" ecoute="180" />
            <Eachsong img={profilImg} title="Domino" artist="Johnny Vegas" ecoute="180" />
            <Eachsong img={profilImg} title="Je crois qu'elle m'aime" artist="Johnny Vegas" ecoute="180" />
        </div>

        
    )
    
    
  }


  export default AccountEachSong