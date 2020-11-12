import React from 'react'

import styles from './Player.module.css'
import Like from '../LikePause/Like.js'
import Arrow from './img/top_arrow.png'


class QueueContainer extends React.Component {
   
  
    render(){
        return (
            <div className={styles.queue_container}>
                <Like/>
                <div className={styles.queue_click_container}>
                    <img src={Arrow}/>
                    <p>File d'attente</p>
                </div>
                <Like/>
            </div>      
        )
    }
  
}

export default QueueContainer
