import React, {Component} from 'react'
import play from './img/play.svg'
import pause from './img/pause.svg'



class Play extends Component{


    render(){
       

        const changePause = () => {
            const pauseImg = document.getElementById('pause');
        
            if(pauseImg.src.includes(pause)){
                pauseImg.setAttribute('src', play);
            }
            else{
                pauseImg.setAttribute('src', pause);
            }
        }
    
        return (
            <div>
                <img id="pause" alt="" onClick={()=> changePause()} src={pause} />
            </div>
    
        )
    }
    
  }


  export default Play