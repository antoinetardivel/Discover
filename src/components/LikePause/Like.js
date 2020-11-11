import React, {useState} from 'react'


import heart from './img/heart.svg'
import whiteHeart from './img/white_heart.svg'
import styles from './Like.module.css'




const Like = ()=>{

    const [src,updateSrc] = useState(heart);



    const changeLike = () => {
        if(src === whiteHeart){
            updateSrc(heart);
        }
        else{
            updateSrc(whiteHeart);
        }
        
    }

    return(
        <div>
            <img className={styles.like_size} onClick={changeLike} src={src} alt=""/>
        </div>
    )
}


  export default Like