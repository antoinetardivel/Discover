import React, {useState} from 'react'
import play from './img/play.svg'
import pause from './img/pause.svg'
import styles from './Like.module.css'




  const Play = ()=>{

    const [src,updateSrc] = useState(pause);


    const changePause = () => {
        if(src === pause){
            updateSrc(play);
        }
        else{
            updateSrc(pause);
        }
        
    }

    return(
        <div className={styles.play_container}>
            <img className={styles.like_size} onClick={changePause} src={src} alt=""/>
        </div>
    )
}




  export default Play