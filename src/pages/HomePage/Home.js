import React, { useContext, useEffect, useState, Fragment } from 'react'

import { SpotifyContext } from 'components/SpotifyProvider'
import firebase from '../../firebase';

import CoverBlur from 'components/CoverBlur'
import TopHome from 'components/TopHome'
import ArtistBubble from 'components/ArtistBubble'
import Podcast from 'components/Podcast'

import styles from './Home.module.css'

import nekfeu from './img/nekfeu.png'



const Home = () => {


  const [value , setValue] = useState(false);
  const [loading , setLoad] = useState(true);
  const [loadingartists , setLoadArt] = useState(true);
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
          setArtists(artists => [...artists, artist]);
      }
  
  
  
      setTracks(tracks => []);
      setArtists(artists => []);
      for (let i = 0; i < (top10.length); i++) {
          searchTracks(i);
          
      }
  },[spotifyApi,value])
  useEffect(() => {
    if(tracks.length == 10){
      setLoad(false)
    }

  },[tracks])
  useEffect(() => {
    if(artists.length == 10){
      setLoadArt(false)
      console.log(artists)
    }

  },[artists])


  return (
    <div className={styles.home_container}>
      <React.Fragment>
        <CoverBlur />
        <div className={styles.rounded_container}>
          {loading === false &&(
            <React.Fragment>
              <h2 className={styles.top_title}>Le Top 10</h2>
              <TopHome
                src1={tracks[3].album.images[0].url}
                src2={tracks[1].album.images[0].url}
                src3={tracks[0].album.images[0].url}
                src4={tracks[2].album.images[0].url}
                src5={tracks[4].album.images[0].url}
              />
            </React.Fragment>
          )}
          <div className={styles.PlaylistDiscovery_container}>
              <div className={styles.Text_Discovery_Content}>
                <p className={styles.Dicovery_title}>Playlist découverte</p>
                <div className={styles.SouligneDiscovery}></div>
              </div>
          </div>
          {loadingartists === false &&(
            <React.Fragment>
              <h2 className={styles.Artist_title}>Artistes à la une</h2>
              <div className={styles.Artists_container}>
                  {artists.map((artist,i) => {
                        return(
                          <ArtistBubble 
                          src={artist.images[0].url} 
                          artistName={artist.name}
                          artistId={artist.id}
                          />
                        )
                    })}
                
              </div>
            </React.Fragment>
          )}
          <h2 className={styles.Artist_title}>Podcasts</h2>
          <Podcast src={nekfeu} artist='Nekfeu' time='57min' name="Interview avec le nouv..."/>
          <Podcast src={nekfeu} artist='Nekfeu' time='57min' name="Interview avec le nouv..."/>
          <Podcast src={nekfeu} artist='Nekfeu' time='57min' name="Interview avec le nouv..."/>
          <Podcast src={nekfeu} artist='Nekfeu' time='57min' name="Interview avec le nouv..."/>
          <Podcast src={nekfeu} artist='Nekfeu' time='57min' name="Interview avec le nouv..."/>
        </div>
      </React.Fragment>
    </div>
  )
}

export default Home


