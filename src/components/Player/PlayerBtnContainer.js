import React from 'react'
import styles from './Player.module.css'
import previous from './img/previous.svg'
import next from './img/next.svg'
import Play from '../LikePause/Play'
import Loop from '../LoopRandom/Loop'
import Random from '../LoopRandom/Random'

class PlayerBtnContainer extends React.Component {
   
   

    render(){
        
        return (
           
            <div className={styles.button_container}>
                <Random/>
                <img src={previous} alt=""/>
                <div className={styles.radius}>
                    <Play/>
                </div>
                <img src={next} alt=""/>
                <Loop/>
            </div>

        )
    }
  
}

export default PlayerBtnContainer
