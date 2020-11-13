import React, { useContext, useEffect, useState } from 'react'
import { SpotifyContext } from 'components/SpotifyProvider'

import BoutonAbonnement from 'components/BoutonAbonnement/BoutonAbonnement'
import Styles from './Top10.module.css'
import PlayTop10 from 'components/PlayTop10/PlayTop10'

function Top10() {

    const top10 = [
        "2OrqZkfSI3GTDZAje4T5Sm",/*1*/
        "4WxqOuzA0OG1851xcChR73",/*2*/
        "2zPcVDSpYNVKQ5c7jR7MXj",/*3*/
        "0p1Ai9W1iVc15y0U6TEJCU",/*4*/
        "76HS9cPRZGtXnbfgJkWW7r",/*5*/
        "3S89XqE7SxSgzAUhgCigAk",/*6*/
        "39UtiRhuzDEvj1CD39QvjG",/*7*/
        "6K9QPIt8AR422heY9O372w",/*8*/
        "7bkxJOCyc7dQyQQrOcwXdF",/*9manque*/
        "7bkxJOCyc7dQyQQrOcwXdF"/*10*/
    ];
    const [tracks , setTracks] = useState([]);
    const { spotifyApi } = useContext(SpotifyContext);
    useEffect(() => {
        const searchTracks = async (i) => {
            const track = await spotifyApi.getTrack(top10[i]);
            // setTracks(tracks.push(track));
            // setTracks({ tracks: [...this.tracks.tracks, track] })
            setTracks(tracks => [...tracks, track]);
            console.log(track);
            // console.log(top10[i]);
        }
        for (let i = 0; i < top10.length; i++) {
            searchTracks(i);
        }
    }, [spotifyApi])

    return(
        <div className={Styles.top10Contener}>
            <h1 className={Styles.top10Titre}>Le Top 10</h1>
            <p className={Styles.top10p}>Chaque semaine, découvrez les 10 sons sélectionnés pour vous,  par nos jurys, pour vous faire découvrir les dernières nouveautés.</p>
            <div className={Styles.top10Action} >
                <div className={Styles.playAction}>
                  <PlayTop10  />  
                </div>
                <BoutonAbonnement /> 
            </div>
            <div className={Styles.MusicsContener} >
                {/* <div className={Styles.topElement}>
                    <MusicIcon src={ImageMusicMoody} 
                        imageArtist={ImageArtistMoody}
                        presArtist="Moody, de son vrai prénom Loïc, est originaire de Agen, et a commencé la musique à l'âge de 15 ans. Auteur de l'EP  Flawless Portrait, il a publié son dernier..." 
                        musicName='Monarque' 
                        artistName='Moody1'  />
                </div> */}
                {tracks.map((track) => {
                        return(
                            <p key={track.id}>{track.name}</p>
                        )
                    })}
            </div>
            
        </div>
    );
  }

export default Top10