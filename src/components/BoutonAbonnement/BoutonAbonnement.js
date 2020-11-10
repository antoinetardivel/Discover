import React from 'react'
import Styles from './BoutonAbonnement.module.css'



const BoutonAbonnement = () => {
    function change() { 
       const buttonSAbonner = document.getElementById('buttonAbonnement')
       buttonSAbonner.classList.toggle(Styles.buttonAbonnementActive)
       if (buttonSAbonner.innerHTML == 'Abonné') {
            buttonSAbonner.innerHTML = 'S\'abonner'
       } else {
            buttonSAbonner.innerHTML = 'Abonné'
       }
        
    }
  return (
    <div>
        <button onClick={change} id='buttonAbonnement' className={Styles.buttonAbonnement}> S'abonner </button>
    </div>

  )
}

export default BoutonAbonnement