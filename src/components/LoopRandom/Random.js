import React, {useState} from 'react'

import styles from './LoopRandom.module.css'
import randomImg from './img/random.svg'
import randomImgActive from './img/random_active.svg'




const Loop = ()=>{

    const [src,updateSrc] = useState(randomImg);



    const changeloop = () => {
        if(src === randomImgActive){
            updateSrc(randomImg);
        }
        else{
            updateSrc(randomImgActive);
        }
        
    }

    return(
        <div>
            <img className={styles.loop_size} onClick={changeloop} src={src} alt=""/>
        </div>
    )
}


  export default Loop