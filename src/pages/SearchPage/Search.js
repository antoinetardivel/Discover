import style from './Search.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { SpotifyContext } from 'components/SpotifyProvider'

import Loupe from 'components/Menu/img/research.svg'
import ResultContent from '../../components/ResultContent/ResultContent'

import PlayerAppearOnclick from '../../components/PlayerAppearOnclick/index'



function Search() {

    

    const [value , setValue] = useState('');
    const [firstSearch , setfirstSearch] = useState(false);
    const [loadingStatut , setloadingStatut] = useState(false);
    const [tracks , setTracks] = useState([]);
    const { spotifyApi } = useContext(SpotifyContext);
    useEffect(() => {
        const searchTracks = async () => {
            setloadingStatut(true)
            const tracks = await spotifyApi.searchTracks(value, {limit:20});
            setloadingStatut(false)
            setTracks(tracks.tracks.items);
        }
        if (value.length > 0){
            searchTracks();
        }
        else{
            setTracks([]);
            setfirstSearch(false)
        }
      }, [spotifyApi,value])

      console.log(tracks);
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
                                setfirstSearch(true)
                            }}
                        />
                    </div>
                    {tracks.length === 0 && firstSearch === true && loadingStatut === false &&(
                        <p className={style.noResult}>Pas de résultat... :(</p>
                    )}
                    {loadingStatut === true &&(
                        <img alt="" className={style.loadingGif} src={'/loading.gif'} />
                    )}
                    {tracks.map((track) => {
                        return(
                            <ResultContent
                            img={track.album.images[1].url}
                            title={track.name}
                            artist={track.artists[0].name}
                            duration={track.duration_ms}
                            music={track.uri}
                            />
                        )
                    })}
                    
             <PlayerAppearOnclick/>
           </div>
            
        );
  }

export default Search
