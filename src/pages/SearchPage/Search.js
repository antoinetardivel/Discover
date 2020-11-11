import React from 'react';
import style from './Search.module.css'
import Loupe from 'components/Menu/img/research.svg'
import ImageMusicMoody from 'components/MusicIcon/img/moody.png'
import option from './option.svg'

function Search() {
    return(
           <div className={style.PageSearch}>

                    <div className={style.searchHeader}>
                        <img alt="" className={style.searchHeader_loupe} src={Loupe}/>
                        <input className={style.searchHeader_input} type="text" id="rechercher" name="rechercher" placeholder="Rechercher"/>
                    </div>

                    <div className={style.content_result}>
                        <img alt="" className={style.result_img} src={ImageMusicMoody}/>
                            <div className={style.text}>
                            <h2 className={style.result_title}>Titre musique * Artiste</h2>
                            <h3 className={style.result_category}>Titre</h3>
                            </div>
                        <img alt="" className={style.result_options} src={option}/>
                    </div>

                    <div className={style.content_result}>
                        <img alt="" className={style.result_img} src={ImageMusicMoody}/>
                            <div className={style.text}>
                            <h2 className={style.result_title}>Titre musique * Artiste</h2>
                            <h3 className={style.result_category}>Titre</h3>
                            </div>
                        <img alt="" className={style.result_options} src={option}/>
                    </div>

                    <div className={style.content_result}>
                        <img alt="" className={style.result_img} src={ImageMusicMoody}/>
                            <div className={style.text}>
                            <h2 className={style.result_title}>Titre musique * Artiste</h2>
                            <h3 className={style.result_category}>Titre</h3>
                            </div>
                        <img alt="" className={style.result_options} src={option}/>
                    </div>



           </div>
            
        );
  }

export default Search