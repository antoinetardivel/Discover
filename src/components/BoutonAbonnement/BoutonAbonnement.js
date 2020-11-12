import React, {useState} from 'react'
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

const BoutonAbonnement = (prop)=>{

  const [varText, updateText] = useState('S\'abonner');
  let bla 
  if(prop.Artist){
  bla = Styles.buttonAbonnementActive
}else{
  bla = Styles.buttonAbonnement
}
  const [syli, updateClass] = useState(bla);

  const change = () => {
      if(varText === 'S\'abonner'){
          updateText('Abonné');    
      }
      else{
          updateText('S\'abonner'); 
      }

      if(!prop.Artist){
        if (syli === Styles.buttonAbonnement) {
        updateClass(Styles.buttonAbonnementActive)
      } else {
        updateClass(Styles.buttonAbonnement)
      }
    }
      
      
      
  }

  return(
    <div>
        <button onClick={change} id='buttonAbonnement' className={syli}> {varText} </button>
    </div>
  )
}

export default BoutonAbonnement