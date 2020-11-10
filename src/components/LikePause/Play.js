import React, {useState} from 'react'
import play from './img/play.svg'
import pause from './img/pause.svg'




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
        <div>
            <img onClick={changePause} src={src} alt=""/>
        </div>
    )
}




  export default Play