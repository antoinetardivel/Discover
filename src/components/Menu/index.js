import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import logoHome from './img/home.svg'
import logoResearch from './img/research.svg'
import logoTop from './img/top.svg'
import logoUser from './img/user.svg'

const Menu = () => {
  const navStyle = {
    color: 'black'
  }
  return (
    <div className={styles.menu_container}>
        <ul className={styles.menu_list}>
            <li><img src={logoHome}/><Link className={styles.link} to='/'>Accueil</Link></li>
            <li><img src={logoResearch}/><Link className={styles.link} to='/Recherche'>Rechercher</Link></li>
            <li><img src={logoTop}/><Link className={styles.link} to='/Top10'>Top 10</Link></li>
            <li><img src={logoUser}/><Link className={styles.link} to='/Compte'>Compte</Link></li>
        </ul>
    </div>
        
  )
}

export default Menu
