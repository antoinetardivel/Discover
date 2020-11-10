import React, {Component} from 'react'
import styles from './Account.module.css'
import PlaylistList from '../PlaylistList'



class AccountPlaylist extends Component{
    
    
    render(){

        return (
            <div className={styles.account_playlist_container}>
                <div className={styles.playlist_favoris_container}>
                    <h2>Playlist</h2>
                    <h2>Favoris</h2>
                </div>
                <PlaylistList/>
            </div>
    
            
        )
    }
    
  }


  export default AccountPlaylist