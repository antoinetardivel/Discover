import React from 'react'
import { Link } from 'react-router-dom';
// import { SpotifyContext } from 'components/SpotifyWrapper'
import styles from './Home.module.css'

const Home = () => {
  // const { deviceId, token } = useContext(SpotifyContext);
  return (
    <div className={styles.container}>
      <h1>Page d'accueil</h1>
      <ul>
        <li><Link to='/Artiste'> Artiste </Link></li>
        <li><Link to='/Playlist'> Playlist </Link></li>
      </ul>
    </div>
  )
}

export default Home
