import React, { useContext, useEffect, useState } from 'react'
import { SpotifyContext } from 'components/SpotifyProvider'
import firebase from '../../firebase';

import BoutonAbonnement from 'components/BoutonAbonnement/BoutonAbonnement'

import Styles from './Top10.module.css'
import PlayTop10 from 'components/PlayTop10/PlayTop10'
import MusicIcon from 'components/MusicIcon/MusicIcon'

function Top10() {

    // const top10 = [
    //     "2OrqZkfSI3GTDZAje4T5Sm",/*1*/
    //     "4WxqOuzA0OG1851xcChR73",/*2*/
    //     "2zPcVDSpYNVKQ5c7jR7MXj",/*3*/
    //     "0p1Ai9W1iVc15y0U6TEJCU",/*4*/
    //     "76HS9cPRZGtXnbfgJkWW7r",/*5*/
    //     "3S89XqE7SxSgzAUhgCigAk",/*6*/
    //     "39UtiRhuzDEvj1CD39QvjG",/*7*/
    //     "6K9QPIt8AR422heY9O372w",/*8*/
    //     "60AY8gRW9BjLgxeuqFVbTs",/*9*/
    //     "7bkxJOCyc7dQyQQrOcwXdF"/*10*/
    // ];
    const [value , setValue] = useState(false);
    const [top10 , setTop] = useState([]);
    const [tracks , setTracks] = useState([]);
    const [artists , setArtists] = useState([]);
    const { spotifyApi } = useContext(SpotifyContext);
    useEffect(() => { 
        const tracksRef = firebase.database().ref('tracks');
        tracksRef.on("value",(snapshot) => {
            let studentlist = [];
            snapshot.forEach(snap => {
                studentlist.push(snap.val())
            });
            setTop(studentlist);
            setValue(true);
        });

        const searchTracks = async (i) => {
            const track = await spotifyApi.getTrack(top10[i].id);
            setTracks(tracks => [...tracks, track]);
            const artist = await spotifyApi.getArtist(track.artists[0].id);
            setArtists(artists => [...artists, artist.images[0].url]);
        }



        setTracks(tracks => []);
        setArtists(artists => []);
        for (let i = 0; i < (top10.length); i++) {
            searchTracks(i);
        }
    },[spotifyApi,value])

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
                {tracks.map((track,i) => {
                    return(
                        <div key={i} className={Styles.topElement}>
                            <MusicIcon src={track.album.images[1].url} 
                                imageArtist={artists[i]}
                                presArtist="Moody, de son vrai prénom Loïc, est originaire de Agen, et a commencé la musique à l'âge de 15 ans. Auteur de l'EP  Flawless Portrait, il a publié son dernier..." 
                                musicName={track.name}
                                artistName={track.artists[0].name}  
                                artistId={track.artists[0].id}
                                />
                        </div>
                    )
                })}
            </div>
            
        </div>
    );
  }

export default Top10