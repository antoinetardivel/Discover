import React, { useContext, useEffect, useState } from 'react'
import { SpotifyContext } from 'components/SpotifyProvider'
import styles from './Artist.module.css';
import BoutonAbonnement from 'components/BoutonAbonnement/BoutonAbonnement.js'
import BannerArtist from 'components/BannerArtist/index.js'
import PlaylistList from 'components/PlaylistList/index'
import MusicList from 'components/MusicList/MusicList'
import Podcast from 'components/Podcast/index'
import AlbumIcon from 'components/AlbumIcon/AlbumIcon'

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
        if (bla === document.getElementById('Discographie')) {
            document.getElementById('Podcast').classList.remove(styles.activeArtistPart)
            document.getElementById('Playlists').classList.remove(styles.activeArtistPart)
            document.getElementById('PodcastPart').classList.remove(styles.partActive)
            document.getElementById('PlaylistsPart').classList.remove(styles.partActive)
            document.getElementById('DiscographiePart').classList.add(styles.partActive)
        } else if (bla === document.getElementById('Playlists')) {
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
    const IdArtiste = props.location.pathname.split("/Artiste/")[1]
    const [value , setValue] = useState(false);
    const [artist , setArtist] = useState([]);
    const { spotifyApi } = useContext(SpotifyContext);
    useEffect(() => {
        const searchInfos = async (IdArtiste) => {
            const artistfound = await spotifyApi.getArtist(IdArtiste);
            console.log(artistfound);
            console.log(artistfound.images[0].url);
            setArtist(artistfound);
            setValue(true);
        }
        searchInfos(IdArtiste);
    }, [spotifyApi,value])

    return(
        <div>
            {/* <BannerArtist imageArtist={artist.images[1].url} pArtist='oui' /> */}
            {/* <h1 className={styles.artist_title}>{artist.name}</h1>
            <img src={artist.images[0].url} alt="Image profil artiste"/> */}
            {value === true &&(
                    <React.Fragment>
                    {/* <h1 className={styles.artist_title}>{artist.name}</h1> */}
                    {/* <img src={artist.images[0].url} alt="Image profil artiste" /> */}











                    <BannerArtist imageArtist={artist.images[1].url} pArtist='oui' />
                    <div className={styles.artist_content_container}>
                        
                        <div className={styles.resume}>
                            <div className={styles.abonnement_btn}>
                                <BoutonAbonnement Artist='oui' />
                            </div>
                            <h1 className={styles.artist_title}>{artist.name}</h1>
                            <div className={styles.info_container}>
                                <div>
                                    <p>Abonnés</p>
                                    <p>{artist.followers.total}</p>
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
                                <MusicList titreMusics={['Lion\'s tear', 'Nawal', 'Body', 'Silsila Yeh Chahat Ka']} />
                                <h2>Albums</h2>
                                <AlbumIcon />
                                <h2>Titres</h2>
                            </div>

                                
                        
                            <div className={styles.playlistsPart} id='PlaylistsPart'>
                                <PlaylistList />
                            </div>

                            <div className={styles.podcastPart} id='PodcastPart'>
                                <h2>Les podcast de l'Artist</h2>
                                <Podcast src={artist.images[0].url} artist={artist.name} time='$$min' name="Interview BLA BLA avec ..." />
                                <Podcast src={artist.images[0].url} artist={artist.name} time='$$min' name="Interview BLA BLA avec ..." />
                                <Podcast src={artist.images[0].url} artist={artist.name} time='$$min' name="Interview BLA BLA avec ..." />
                                <Podcast src={artist.images[0].url} artist={artist.name} time='$$min' name="Interview BLA BLA avec ..." />
                            </div>
                        </div>
                    </div>



































                    </React.Fragment>
            )}



        {/* <BannerArtist imageArtist={props.location.aboutProps.imageArtist} pArtist='oui' />
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
                        <MusicList titreMusics={['Lion\'s tear', 'Nawal', 'Body', 'Silsila Yeh Chahat Ka']} />
                        <h2>Albums</h2>
                        <AlbumIcon />
                        <h2>Titres</h2>
                    </div>

                        
                
                    <div className={styles.playlistsPart} id='PlaylistsPart'>
                        <PlaylistList />
                    </div>

                    <div className={styles.podcastPart} id='PodcastPart'>
                        <h2>Les podcast de l'Artist</h2>
                        <Podcast src={props.location.aboutProps.imageArtist} artist={props.location.aboutProps.artistName} time='$$min' name="Interview BLA BLA avec ..." />
                        <Podcast src={props.location.aboutProps.imageArtist} artist={props.location.aboutProps.artistName} time='$$min' name="Interview BLA BLA avec ..." />
                        <Podcast src={props.location.aboutProps.imageArtist} artist={props.location.aboutProps.artistName} time='$$min' name="Interview BLA BLA avec ..." />
                        <Podcast src={props.location.aboutProps.imageArtist} artist={props.location.aboutProps.artistName} time='$$min' name="Interview BLA BLA avec ..." />
                    </div>
                </div>
            </div> */}
        </div>
    );
  }



export default Artist