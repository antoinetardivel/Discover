import React from 'react'
import { Link } from 'react-router-dom';
// import { SpotifyContext } from 'components/SpotifyWrapper'
import CoverBlur from 'components/CoverBlur'
import TopHome from 'components/TopHome'
import styles from './Home.module.css'

const Home = () => {
  // const { deviceId, token } = useContext(SpotifyContext);
  return (
    <div className={styles.home_container}>
      <CoverBlur />
      <div className={styles.rounded_container}>
        <h1 className={styles.top_title}>Le Top 10</h1>
        <TopHome />
      </div>
    </div>
  )
}

export default Home

