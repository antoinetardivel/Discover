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
                    <li><Link style={navStyle} to='/'><img src="/logo/home.svg" alt=""/>Accueil</Link></li>
                    <li><Link style={navStyle} to='/Search'><img src="/logo/rechercher.svg" alt=""/>Rechercher</Link></li>
                    <li><Link style={navStyle} to='/Top10'><img src="/logo/top.svg" alt=""/>Top 10</Link></li>
                    <li><Link style={navStyle} to='/Account'><img src="/logo/user.svg" alt=""/>Compte</Link></li>
                </ul>
            </div>
        </div>
  )
}

export default Menu
