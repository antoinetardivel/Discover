import React, { Children } from 'react'
import Styles from './PopUpTop10.module.css'
import BoutonAbonnement from 'components/BoutonAbonnement/BoutonAbonnement'



const PopUpTop10 = (prop) => {
  return (
      <div className={Styles.popUpConener} >
          <div className={Styles.popUpBox}>
                <div className={Styles.imageContener} id={prop.id}>
                    <img src={prop.src} className={Styles.image} />
                </div>
              <p className={Styles.titreMusic}>{prop.musicName}</p>
              <div className={Styles.BandeauArtist}>
                  <img className={Styles.imgArtist} src={prop.imageArtist} />
                  <div>
                     <h3 className={Styles.nomArtist}>{prop.artistName}</h3>
                     <BoutonAbonnement />
                  </div>
              </div>
                <p className={Styles.presArtist} >{prop.presArtist}</p>
                <div className={Styles.croixRetour}>
                    {prop.children}
                </div>
          </div>
      </div>
  )
}

export default PopUpTop10