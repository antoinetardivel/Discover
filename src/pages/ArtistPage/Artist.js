import React from 'react';
import styles from './Artist.module.css';
import BoutonAbonnement from 'components/BoutonAbonnement/BoutonAbonnement.js'
import BlurBanner from 'components/BlurBanner/index.js'

function Artist(props) {
    return(
        <div>
        <BlurBanner imageArtist={props.location.aboutProps.imageArtist} pArtist='oui' />
            <div className={styles.artist_content_container}>
                
                <div className={styles.resume}>
                    <div className={styles.abonnement_btn}>
                        <BoutonAbonnement Artist='oui' />
                    </div>
                    <h1 className={styles.artist_title}>{props.location.aboutProps.artistName}</h1>
                    <div className={styles.info_container}>
                        <div>
                            <p>Abonnés</p>
                            <p>null</p>
                        </div>
                        <div>
                            <p>Titres</p>
                            <p>null</p>
                        </div>
                        <div>
                            <p>Albums</p>
                            <p>null</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.titreCarouselContener}>
                      <h3 id='Discographie' >Discographie</h3>
                      <h3 id='Playlists' >Playlists</h3>
                      <h3 id='Podcast' >Podcast</h3>
                    </div>
                </div>
            </div>
        </div>
    );
  }



export default Artist