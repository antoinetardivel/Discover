import React, { useContext, useEffect, useState } from 'react'
import { SpotifyContext } from 'components/SpotifyProvider'
import styles from './PlaylistList.module.css'
import PlaylistIcon from 'components/PlaylistIcon/PlaylistIcon'
import album1 from './img/album1.png'


    const PlaylistList = () => {

        const [playlists , setPlaylists] = useState([]);
        const [value , setValue] = useState(false);
        const [UrlImageTeste , setUrlImageTeste] = useState([]);
        const { spotifyApi } = useContext(SpotifyContext);
        useEffect(() => {
            const searchInfos = async () => {
                const playlistsFounded = await spotifyApi.getUserPlaylists();
                console.log(playlistsFounded)
                setPlaylists(playlistsFounded);
                setValue(true);
            }
            searchInfos();
            if (value){
                var mapurl = playlists.items.map(function (listElement){
                    if(listElement.images.length > 0){
                    // setUrlImageTeste(listElement.images[0].url)
                    setUrlImageTeste(UrlImageTeste => [...UrlImageTeste, listElement.images[0].url]);
                    }else{
                        setUrlImageTeste(UrlImageTeste => [...UrlImageTeste, album1]);
                        // setUrlImageTeste(album1)
                    }
                });
                console.log(UrlImageTeste)
            }

        }, [spotifyApi,value])


        if (value){
        return (
            <div className={styles.playlist_container}>
                    {playlists.items.map((listElement,i) => {
                        console.log(UrlImageTeste[i])
                        return(
                            <PlaylistIcon key={i}
                                // UrlImage={listElement.images[0].url}
                                // UrlImage="https://i.scdn.co/image/ab67706c0000bebb22356d73733a0e92c2dfb99c"
                                UrlImage={UrlImageTeste[i]}
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