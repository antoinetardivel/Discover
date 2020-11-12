import React from 'react';
import styles from './Artist.module.css';
import BoutonAbonnement from 'components/BoutonAbonnement/BoutonAbonnement.js'
import BlurBanner from 'components/BlurBanner/index.js'
import PlaylistList from 'components/PlaylistList/index'
import MusicList from 'components/MusicList/MusicList'
import Podcast from 'components/Podcast/index'

function Artist(props) {

    let PartieEnCour = document.getElementById('Discographie')    
    let lolololo = styles.partActive + ' ' + styles.discographiePart

    function ActivePart(part){
        if(part === 'Playlists'){
            PartieEnCour = document.getElementById('Playlists')
            
        }else if(part === 'Podcast'){
            PartieEnCour = document.getElementById('Podcast')
            
        }else if(part === 'Discographie'){
            PartieEnCour = document.getElementById('Discographie')
        }
        changeActive(PartieEnCour)
    }

    function changeActive(bla) {
        bla.classList.add(styles.activeArtistPart)
        if (bla == document.getElementById('Discographie')) {
            document.getElementById('Podcast').classList.remove(styles.activeArtistPart)
            document.getElementById('Playlists').classList.remove(styles.activeArtistPart)
            document.getElementById('PodcastPart').classList.remove(styles.partActive)
            document.getElementById('PlaylistsPart').classList.remove(styles.partActive)
            document.getElementById('DiscographiePart').classList.add(styles.partActive)
        } else if (bla == document.getElementById('Playlists')) {
            document.getElementById('Discographie').classList.remove(styles.activeArtistPart)
            document.getElementById('Podcast').classList.remove(styles.activeArtistPart)
            document.getElementById('PodcastPart').classList.remove(styles.partActive)
            document.getElementById('PlaylistsPart').classList.add(styles.partActive)
            document.getElementById('DiscographiePart').classList.remove(styles.partActive)
        } else {
            document.getElementById('Discographie').classList.remove(styles.activeArtistPart)
            document.getElementById('Playlists').classList.remove(styles.activeArtistPart)
            document.getElementById('PodcastPart').classList.add(styles.partActive)
            document.getElementById('PlaylistsPart').classList.remove(styles.partActive)
            document.getElementById('DiscographiePart').classList.remove(styles.partActive)
        }
    }

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
                <div className={styles.navArtist}>
                    <div className={styles.titreCarouselContener}>
                      <h3 onClick={() => ActivePart('Discographie')} id='Discographie' className={styles.activeArtistPart} >Discographie</h3>
                      <h3 onClick={() => ActivePart('Playlists')} id='Playlists' >Playlists</h3>
                      <h3 onClick={() => ActivePart('Podcast')} id='Podcast' >Podcast</h3>
                    </div>
                    <div className={lolololo}  id='DiscographiePart'>
                        <h2>Musiques les plus écoutées</h2>
                        <MusicList />
                    </div>
                    <div className={styles.playlistsPart} id='PlaylistsPart'>
                        <PlaylistList />
                    </div>
                    <div className={styles.podcastPart} id='PodcastPart'>
                        <h2>Les podcast de l'Artist</h2>
                        <Podcast src={props.location.aboutProps.imageArtist} artist={props.location.aboutProps.artistName} time='$$min' name="Interview BLA BLA avec ..." />
                    </div>
                </div>
            </div>
        </div>
    );
  }



export default Artist