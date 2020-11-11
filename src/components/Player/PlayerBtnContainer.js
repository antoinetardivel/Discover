import React from 'react'
import styles from './Player.module.css'
import album from './img/album.png'
import previous from './img/previous.svg'
import next from './img/next.svg'
import random from './img/random.svg'
import loop from './img/loop.svg'
import Play from '../LikePause/Play'

class PlayerBtnContainer extends React.Component {
   
   

    render(){
        
        return (
           
            <div className={styles.button_container}>
                <img src={random} alt=""/>
                <img src={previous} alt=""/>
                <Play/>
                <img src={next} alt=""/>
                <img src={loop} alt=""/>
            </div>

        )
    }
  
}

export default PlayerBtnContainer
