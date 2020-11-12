import React from 'react';
import BoutonAbonnement from 'components/BoutonAbonnement/BoutonAbonnement'
import Styles from './Top10.module.css'
import PlayTop10 from 'components/PlayTop10/PlayTop10'
import MusicIcon from 'components/MusicIcon/MusicIcon'

import ImageMusicMoody from 'components/MusicIcon/img/moody.png'
import ImageArtistMoody from 'components/MusicIcon/img/ArtistMoody.PNG'

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
                    <div className={Styles.first}>
                    <MusicIcon src={ImageMusicMoody} 
                        imageArtist={ImageArtistMoody}
                        presArtist="Moody, de son vrai prénom Loïc, est originaire de Agen, et a commencé la musique à l'âge de 15 ans. Auteur de l'EP  Flawless Portrait, il a publié son dernier..." 
                        musicName='Monarque' 
                        artistName='Moody1'  /></div>
                    <MusicIcon src={ImageMusicMoody} 
                        imageArtist={ImageArtistMoody} 
                        presArtist="Moody, de son vrai prénom Loïc, est originaire de Agen, et a commencé la musique à l'âge de 15 ans. Auteur de l'EP  Flawless Portrait, il a publié son dernier..." 
                        musicName='Monarque' 
                        artistName='Moody2' />g
                </div>
                <div className={Styles.MusicsRowContener}>
                    <div className={Styles.first}>
                    <MusicIcon src={ImageMusicMoody} 
                        imageArtist={ImageArtistMoody} 
                        presArtist="Moody, de son vrai prénom Loïc, est originaire de Agen, et a commencé la musique à l'âge de 15 ans. Auteur de l'EP  Flawless Portrait, il a publié son dernier..." 
                        musicName='Monarque' 
                        artistName='Moody3'  /></div>
                    <MusicIcon src={ImageMusicMoody} 
                        imageArtist={ImageArtistMoody} 
                        presArtist="Moody, de son vrai prénom Loïc, est originaire de Agen, et a commencé la musique à l'âge de 15 ans. Auteur de l'EP  Flawless Portrait, il a publié son dernier..." 
                        musicName='Monarque' 
                        artistName='Moody4' />  
                </div>
                <div className={Styles.MusicsRowContener}>
                    <div className={Styles.first}>
                    <MusicIcon src={ImageMusicMoody} 
                        imageArtist={ImageArtistMoody} 
                        presArtist="Moody, de son vrai prénom Loïc, est originaire de Agen, et a commencé la musique à l'âge de 15 ans. Auteur de l'EP  Flawless Portrait, il a publié son dernier..." 
                        musicName='Monarque' 
                        artistName='Moody5'  /></div>
                    <MusicIcon src={ImageMusicMoody} 
                        imageArtist={ImageArtistMoody} 
                        presArtist="Moody, de son vrai prénom Loïc, est originaire de Agen, et a commencé la musique à l'âge de 15 ans. Auteur de l'EP  Flawless Portrait, il a publié son dernier..." 
                        musicName='Monarque' 
                        artistName='Moody6' />  
                </div> 
                <div className={Styles.MusicsRowContener}>
                    <div className={Styles.first}>
                    <MusicIcon src={ImageMusicMoody} 
                        imageArtist={ImageArtistMoody} 
                        presArtist="Moody, de son vrai prénom Loïc, est originaire de Agen, et a commencé la musique à l'âge de 15 ans. Auteur de l'EP  Flawless Portrait, il a publié son dernier..." 
                        musicName='Monarque' 
                        artistName='Moody7'  /></div>
                    <MusicIcon src={ImageMusicMoody} 
                        imageArtist={ImageArtistMoody} 
                        presArtist="Moody, de son vrai prénom Loïc, est originaire de Agen, et a commencé la musique à l'âge de 15 ans. Auteur de l'EP  Flawless Portrait, il a publié son dernier..." 
                        musicName='Monarque' 
                        artistName='Moody8' />  
                </div> 
                <div className={Styles.MusicsRowContener}>
                    <div className={Styles.first}>
                    <MusicIcon src={ImageMusicMoody} 
                        imageArtist={ImageArtistMoody} 
                        presArtist="Moody, de son vrai prénom Loïc, est originaire de Agen, et a commencé la musique à l'âge de 15 ans. Auteur de l'EP  Flawless Portrait, il a publié son dernier..." 
                        musicName='Monarque' 
                        artistName='Moody9'  /></div>
                    <MusicIcon src={ImageMusicMoody} 
                        imageArtist={ImageArtistMoody} 
                        presArtist="Moody, de son vrai prénom Loïc, est originaire de Agen, et a commencé la musique à l'âge de 15 ans. Auteur de l'EP  Flawless Portrait, il a publié son dernier..." 
                        musicName='Monarque' 
                        artistName='Moody10' />  
                </div> 
            </div>
            
        </div>
    );
  }

export default Top10