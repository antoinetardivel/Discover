import React, {Component} from 'react'
import styles from './PlaylistList.module.css'
import album1 from './img/album1.png'
import album2 from './img/album2.png'
import album3 from './img/album3.png'
import album4 from './img/album4.png'
import album5 from './img/album5.png'





    const PlaylistList = () => {
    
        function EachPlaylist(props) {
            return(
                <div className={styles.each_playlist}>
                   <img src={props.imgName}/>
                   <p>{props.playlistName}</p>
                </div>
            )
        }
     
    
        return (
            <div className={styles.playlist_container}>
                <EachPlaylist imgName={album1} playlistName="aaaa" />
                <EachPlaylist imgName={album2} playlistName="aaaa" />
                <EachPlaylist imgName={album3} playlistName="aaaa" />
                <EachPlaylist imgName={album4} playlistName="aaaa" />
                <EachPlaylist imgName={album5} playlistName="aaaa" />
            </div>
    
            
        )
        
        
      }


  export default PlaylistList