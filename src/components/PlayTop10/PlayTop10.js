import React, {Component} from 'react'
import Styles from './PlayTop10.module.css'


import play from '../LikePause/img/play.svg'
import pause from '../LikePause/img/pause.svg'

class PlayTop10 extends Component{


    render(){
       

        const changePause = () => {
            const pauseImg = document.getElementById('playTop10');
        
            if(pauseImg.src.includes(pause)){
                pauseImg.setAttribute('src', play);
            }
            else{
                pauseImg.setAttribute('src', pause);
            }
        }
    
        return (
            <div>
                <img id="playTop10" className={Styles.play} onClick={()=> changePause()} src={play} />
            </div>
    
        )
    }
    
  }


  export default PlayTop10