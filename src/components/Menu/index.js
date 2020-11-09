import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Menu.module.css'

const Menu = () => {
  const navStyle = {
    color: 'black'
  }
  return (
    <div className={styles.menu_container}>
        <ul className={styles.menu_list}>
            <li><Link className={styles.link} to='/'>Accueil</Link></li>
            <li><Link className={styles.link} to='/Recherche'>Rechercher</Link></li>
            <li><Link className={styles.link} to='/Top10'>Top 10</Link></li>
            <li><Link className={styles.link} to='/Compte'>Compte</Link></li>
        </ul>
    </div>
        
  )
}

export default Menu
