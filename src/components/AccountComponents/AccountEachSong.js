import React, {Component} from 'react'
import profilImg from './img/profil.jpg'
import styles from './Account.module.css'



const AccountEachSong = () => {
    
    function Eachsong(props) {
        return(
            <div className={styles.account_each_song_container}></div>
        )
    }
 

    return (
        <div className={styles.account_song_container}>
            <Eachsong img="a" title="Sara" artist="artist" ecoute="180" />
            <Eachsong img="a" title="Cahal" artist="artist" ecoute="180" />
            <Eachsong img="a" title="Edite" artist="artist" ecoute="180" />
        </div>

        
    )
    
    
  }


  export default AccountEachSong