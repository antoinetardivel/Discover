import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './PopUpTop10.module.css'
import BoutonAbonnement from 'components/BoutonAbonnement/BoutonAbonnement'



const PopUpTop10 = (prop) => {
  return (
      <div className={Styles.popUpConener} >
          <div className={Styles.popUpBox}>
                <div className={Styles.imageContener} id={prop.id}>
                    <img alt="" src={prop.src} className={Styles.image} />
                </div>
              <p className={Styles.titreMusic}>{prop.musicName}</p>
              <div className={Styles.BandeauArtist}>
                  <img alt="" className={Styles.imgArtist} src={prop.imageArtist} />
                  <div>
                     <h3 className={Styles.nomArtist}>{prop.artistName}</h3>
                     <BoutonAbonnement />
                  </div>
              </div>
                <p className={Styles.presArtist} >{prop.presArtist}</p>
                <button className={Styles.btnDisco}><Link className={Styles.linkBtnDico}  to={{pathname: '/Artiste', aboutProps:{ artistName: prop.artistName, imageArtist: prop.imageArtist } }}> Voir la discographie </Link></button>
                <div className={Styles.croixRetour}>
                    {prop.children}
                </div>
          </div>
      </div>
  )
}

export default PopUpTop10