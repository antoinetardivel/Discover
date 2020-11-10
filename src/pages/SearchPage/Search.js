import React from 'react';
import style from './Search.module.css'
import Loupe from 'components/Menu/img/research.svg'
import MusicIcon from 'components/MusicIcon/MusicIcon'
import ImageMusicMoody from 'components/MusicIcon/img/moody.png'

function Search() {
    return(
           <div className={style.PageSearch}>

                    <div className={style.searchHeader}>
                        <img className={style.searchHeader_loupe} src={Loupe}/>
                        <input className={style.searchHeader_input} type="text" id="rechercher" name="rechercher" placeholder="Rechercher"/>
                    </div>

                    <div className={style.content}>
                        <div className={style.content_result}>
                            <div className={style.content_result_ligne}>
                            </div>
                        </div>
                        
                    </div>
           </div>
            
        );
  }

export default Search