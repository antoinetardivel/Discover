import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import logoHome from './img/home.svg'
import logoResearch from './img/research.svg'
import logoTop from './img/top.svg'
import logoUser from './img/user.svg'
import activeElement from './img/activeElement.svg'



const MenuNavigation = () => {
   
  
    const addActive = (e)=>{
      const element = document.getElementById('element'); //Stock le svg en bas de la nav bar qui se met sur la page active

      let link = document.getElementById(`link${e}`); //Stock le lien cliqué en question

      let width = link.offsetWidth; //Stock la largeur du lien cliqué
      
      let pos = link.getBoundingClientRect().left; //Stock la valeur 'left' du lien cliqué
      
      element.style.left = pos + width / 2 + "px"; //Applique la valeur left égale a celle du lien cliqué + la moitié de sa largeur/2 en px
      
    }
    return (
      <div className={styles.menu_container}>
          <ul className={styles.menu_list}>
              <li id="link1"><Link onClick={() => addActive('1')} className={styles.link} to='/'><img src={logoHome}/>Accueil</Link></li>
              <li id="link2"><Link onClick={() => addActive('2')} className={styles.link} to='/Recherche'><img src={logoResearch}/>Rechercher</Link></li>
              <li id="link3"><Link onClick={() => addActive('3')} className={styles.link} to='/Top10'><img src={logoTop}/>Top 10</Link></li>
              <li id="link4"><Link onClick={() => addActive('4')} className={styles.link} to='/Compte'><img src={logoUser}/>Compte</Link></li>
          </ul>
          <img id="element" className={styles.active_element} src={activeElement}/>
      </div>
  
          
    )
    
  }


  export default MenuNavigation