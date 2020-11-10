import React from 'react'
import { Link } from 'react-router-dom';
// import { SpotifyContext } from 'components/SpotifyWrapper'
import TopHome from 'components/TopHome'
import styles from './Home.module.css'

const Home = () => {
  // const { deviceId, token } = useContext(SpotifyContext);
  return (
    <div className={styles.home_container}>
      <TopHome />
    </div>
  )
}

export default Home

