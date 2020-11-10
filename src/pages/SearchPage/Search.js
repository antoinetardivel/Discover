import React from 'react';
import style from './Search.module.css'
import Loupe from 'components/Menu/img/research.svg'

function Search() {
    return(
        <div>
           <div className={style.SearchHierarchy}>
                    <div className={style.bar}>
                    <img className={style.Loupe}src={Loupe}/>
                    <h1 className={style.titre}>Recherche</h1>
                    </div>

                    <div className={style.content}>
                        
                    </div>
           </div>
            
            
            
        </div>
    );
  }

export default Search