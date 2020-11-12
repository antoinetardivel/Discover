import React from 'react'

import styles from './Player.module.css'
import Like from '../LikePause/Like.js'
import QueueMusic from './QueueMusic'
import Arrow from './img/top_arrow.png'
import option from './img/option.png'


class QueueContainer extends React.Component {
   
    state ={
        isActive: true
    }
  
    render(){
        console.log(this.state.isActive)
        const isOn = this.state.isActive;
        return (
            <div className={styles.queue_container}>
                <div className={styles.btn_container}>
                    <div className={styles.option_container}>
                        <img src={option}/>
                    </div>
                    <div onClick={()=> this.setState({isActive: !isOn})} className={isOn ? styles.queue_click_container : styles.queue_click_container_active}>
                        <img src={Arrow}/>
                        <p>File d'attente</p>
                    </div>
                    <Like/>
                </div>
                <div className={isOn ? styles.playlist_container : styles.playlist_container_active}>
                    
                    <QueueMusic/>
                    
                    
                </div>    
            </div>  
        )
    }
  
}

export default QueueContainer
