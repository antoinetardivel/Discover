import React from 'react'
// import { SpotifyContext } from 'components/SpotifyWrapper'
import styles from './Home.module.css'

const Home = () => {
  // const { deviceId, token } = useContext(SpotifyContext);
  return (
    <div className={styles.container}>
      <h1>Page d'accueil</h1>
    </div>
  )
}

export default Home
