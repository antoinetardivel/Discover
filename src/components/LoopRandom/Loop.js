import React, {useState} from 'react'

import styles from './LoopRandom.module.css'
import loopImg from './img/loop.svg'
import loopImgActive from './img/loop_active.svg'




const Loop = ()=>{

    const [src,updateSrc] = useState(loopImg);



    const changeloop = () => {
        if(src === loopImgActive){
            updateSrc(loopImg);
        }
        else{
            updateSrc(loopImgActive);
        }
        
    }

    return(
        <div>
            <img className={styles.loop_size} onClick={changeloop} src={src} alt=""/>
        </div>
    )
}


  export default Loop