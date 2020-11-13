import style from './Search.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { SpotifyContext } from 'components/SpotifyProvider'

import Loupe from 'components/Menu/img/research.svg'
import ResultContent from '../../components/ResultContent/ResultContent'



function Search() {


    const [value , setValue] = useState('');
    const [tracks , setTracks] = useState([]);
    const { spotifyApi } = useContext(SpotifyContext);
    useEffect(() => {
        
        const searchTracks = async () => {
            const tracks = await spotifyApi.searchTracks(value, {limit:20});
            setTracks(tracks.tracks.items);
        }
        if (value.length){
            searchTracks();
        }
        else{
            setTracks([]);
        }
      }, [spotifyApi,value])
      console.log(tracks)
    return(
           <div className={style.PageSearch}>

                    <div className={style.searchHeader}>
                        <img alt="" className={style.searchHeader_loupe} src={Loupe}/>
                        <input
                            className={style.searchHeader_input}
                            type="text"
                            id="rechercher"
                            name="rechercher"
                            placeholder="Rechercher"

                            onChange={(event) => {
                                setValue(event.target.value)
                            }}
                        />
                    </div>
                    {tracks.length === 0 && (
                        <p className={style.noResult}>Pas de résultat... :(</p>
                    )}
                    {tracks.map((track) => {
                        return(
                            <ResultContent
                            img={track.album.images[2].url}
                            title={track.name}
                            category="Titre"
                            />
                        )
                    })}
           </div>
            
        );
  }

export default Search
