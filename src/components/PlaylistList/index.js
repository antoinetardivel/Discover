import React, { useContext, useEffect, useState } from 'react'
import { SpotifyContext } from 'components/SpotifyProvider'
import styles from './PlaylistList.module.css'

    const PlaylistList = () => {
    
        function EachPlaylist(props) {
            return(
                <div className={styles.each_playlist}>
                    <div>
                        <img alt="" src={props.UrlImage}/>
                        <p>{props.PlaylistName}</p>
                   </div>
                </div>
            )
        }

        const [playlists , setPlaylists] = useState([]);
        const [value , setValue] = useState(false);
        const { spotifyApi } = useContext(SpotifyContext);
        useEffect(() => {
            const searchInfos = async () => {
                const playlistsFounded = await spotifyApi.getUserPlaylists();
                console.log(playlistsFounded)
                setPlaylists(playlistsFounded);
                setValue(true);
            }
            searchInfos();
        }, [spotifyApi,value])
     
        if (value){
        return (
            <div className={styles.playlist_container}>
                    {playlists.items.map((listElement,i) => {
                        return(
                            <EachPlaylist key={i}
                                // UrlImage={listElement.images[0].url}
                                PlaylistName={listElement.name}
                                PlaylistId={listElement.id}
                            />
                        )
                    })}
            </div>
    
            
        )}else{
            return(
                <div className={styles.playlist_container}></div>
            )
        }
        
        
      }


  export default PlaylistList