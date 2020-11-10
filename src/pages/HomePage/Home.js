import React from 'react'
import { Link } from 'react-router-dom';
// import { SpotifyContext } from 'components/SpotifyWrapper'
import CoverBlur from 'components/CoverBlur'
import TopHome from 'components/TopHome'
import ArtistBubble from 'components/ArtistBubble'
import Podcast from 'components/Podcast'
import styles from './Home.module.css'
import nekfeu from './img/nekfeu.png'

const Home = () => {
  // const { deviceId, token } = useContext(SpotifyContext);
  return (
    <div className={styles.home_container}>
      <CoverBlur />
      <div className={styles.rounded_container}>
        <h2 className={styles.top_title}>Le Top 10</h2>
        <TopHome />
        <div className={styles.PlaylistDiscovery_container}>
            <div className={styles.Text_Discovery_Content}>
              <p className={styles.Dicovery_title}>Playlist découverte</p>
              <div className={styles.SouligneDiscovery}></div>
            </div>
        </div>
        <h2 className={styles.Artist_title}>Artistes à la une</h2>
        <div className={styles.Artists_container}>
          <ArtistBubble src={nekfeu} name='Nekfeu' />
          <ArtistBubble src={nekfeu} name='Nekfeu' />
          <ArtistBubble src={nekfeu} name='Nekfeu' />
        </div>
        <h2 className={styles.Artist_title}>Podcast</h2>
        <Podcast src={nekfeu} artist='Nekfeu' time='57min' name="Interview avec le nouv..."/>
        <Podcast src={nekfeu} artist='Nekfeu' time='57min' name="Interview avec le nouv..."/>
        <Podcast src={nekfeu} artist='Nekfeu' time='57min' name="Interview avec le nouv..."/>
        <Podcast src={nekfeu} artist='Nekfeu' time='57min' name="Interview avec le nouv..."/>
        <Podcast src={nekfeu} artist='Nekfeu' time='57min' name="Interview avec le nouv..."/>
      </div>
    </div>
  )
}

export default Home

