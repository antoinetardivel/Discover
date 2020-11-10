import React from 'react';
import BoutonAbonnement from 'components/BoutonAbonnement/BoutonAbonnement'
import Styles from './Top10.module.css'
import PlayTop10 from 'components/PlayTop10/PlayTop10'
import MusicIcon from 'components/MusicIcon/MusicIcon'

import ImageMusicMoody from 'components/MusicIcon/img/moody.png'

function Top10() {

    return(
        <div className={Styles.top10Contener}>
            <h1 className={Styles.top10Titre}>Le Top 10</h1>
            <p className={Styles.top10p}>Chaque semaine, découvrez les 10 sons sélectionnés pour vous,  par nos jurys, pour vous faire découvrir les dernières nouveautés.</p>
            <div className={Styles.top10Action} >
                <div className={Styles.playAction}>
                  <PlayTop10  />  
                </div>
                <BoutonAbonnement /> 
            </div>
            <div className={Styles.MusicsContener} >
                <div className={Styles.MusicsRowContener}>
                    <div className={Styles.first}><MusicIcon src={ImageMusicMoody} musicName='Monarque' artistName='Moody'  /></div>
                    <MusicIcon src={ImageMusicMoody} musicName='Monarque' artistName='Moody' />  
                </div>
                <div className={Styles.MusicsRowContener}>
                    <div className={Styles.first}><MusicIcon src={ImageMusicMoody} musicName='Monarque' artistName='Moody'  /></div>
                    <MusicIcon src={ImageMusicMoody} musicName='Monarque' artistName='Moody' />  
                </div>
                <div className={Styles.MusicsRowContener}>
                    <div className={Styles.first}><MusicIcon src={ImageMusicMoody} musicName='Monarque' artistName='Moody'  /></div>
                    <MusicIcon src={ImageMusicMoody} musicName='Monarque' artistName='Moody' />  
                </div> 
                <div className={Styles.MusicsRowContener}>
                    <div className={Styles.first}><MusicIcon src={ImageMusicMoody} musicName='Monarque' artistName='Moody'  /></div>
                    <MusicIcon src={ImageMusicMoody} musicName='Monarque' artistName='Moody' />  
                </div> 
                <div className={Styles.MusicsRowContener}>
                    <div className={Styles.first}><MusicIcon src={ImageMusicMoody} musicName='Monarque' artistName='Moody'  /></div>
                    <MusicIcon src={ImageMusicMoody} musicName='Monarque' artistName='Moody' />  
                </div> 
            </div>
            
        </div>
    );
  }

export default Top10