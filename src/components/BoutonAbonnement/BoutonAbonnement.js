import React, {Component, useState} from 'react'
import Styles from './BoutonAbonnement.module.css'



// const BoutonAbonnement = () => {
//     function change() { 
//        const buttonSAbonner = document.getElementById('buttonAbonnement')
//        buttonSAbonner.classList.toggle(Styles.buttonAbonnementActive)
//        if (buttonSAbonner.innerHTML == 'Abonné') {
//             buttonSAbonner.innerHTML = 'S\'abonner'
//        } else {
//             buttonSAbonner.innerHTML = 'Abonné'
//        }
        
//     }
//   return (
//     <div>
//         <button onClick={change} id='buttonAbonnement' className={Styles.buttonAbonnement}> S'abonner </button>
//     </div>

//   )
// }

const BoutonAbonnement = ()=>{

  const [varText, updateText] = useState('S\'abonner');
  const [syli, updateClass] = useState(Styles.buttonAbonnement);

  const change = () => {
      if(varText === 'S\'abonner'){
          updateText('Abonné');    
      }
      else{
          updateText('S\'abonner'); 
      }

      if (syli === Styles.buttonAbonnement) {
        updateClass(Styles.buttonAbonnementActive)
      } else {
        updateClass(Styles.buttonAbonnement)
      }
      
  }

  return(
    <div>
        <button onClick={change} id='buttonAbonnement' className={syli}> {varText} </button>
    </div>
  )
}

export default BoutonAbonnement