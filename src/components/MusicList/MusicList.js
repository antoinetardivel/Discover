import React from 'react'
import styles from './MusicList.module.css'
import option from 'components/ResultContent/img/option.svg'
import Like from 'components/LikePause/Like'


function MusicList(porp) {
   let num = 1 
    const listMusic = porp.titreMusics.map((nomMusic,i) =>

            <li className={styles.ItemList} key={i}> { num++ + ' ' + nomMusic} <div className={styles.endList} > <Like /> <img alt="" className={styles.optionList} src={option}/> </div> </li>
            );
            
            
    return (
        <ul>
            {listMusic}
        </ul>
    )
}


  export default MusicList