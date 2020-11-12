import React from 'react';
import styles from './Artist.module.css';
import BoutonAbonnement from 'components/BoutonAbonnement/BoutonAbonnement.js'
import BlurBanner from 'components/BlurBanner/index.js'

function Artist(props) {
    return(
        <div>
        <BlurBanner imageArtist={props.location.aboutProps.imageArtist} />
            <div className={styles.artist_content_container}>
                
                <div className={styles.resume}>
                    <div className={styles.abonnement_btn}>
                        <BoutonAbonnement />
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
                <h1>Artiste</h1>
                {console.log(props.location.aboutProps)}
                <h3>Nom de l'artist : {props.location.aboutProps.artistName}</h3>
                <p>Image de l'artist</p>
                <img alt="" src={props.location.aboutProps.imageArtist} />
            </div>
        </div>
    );
  }



export default Artist