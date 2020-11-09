import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
  const navStyle = {
    color: 'black'
  }
  return (
    <div className="nav-container">
            <div className='nav'>
                <ul className='navLinks'>
                    <li><Link style={navStyle} to='/'>Accueil</Link></li>
                    <li><Link style={navStyle} to='/Recherche'>Rechercher</Link></li>
                    <li><Link style={navStyle} to='/Top10'>Top 10</Link></li>
                    <li><Link style={navStyle} to='/Compte'>Compte</Link></li>
                </ul>
            </div>
        </div>
  )
}

export default Menu
