import React from 'react'

import styles from './Player.module.css'
import Like from '../LikePause/Like.js'


class QueueContainer extends React.Component {
   
  
    render(){
        return (
            <div className={styles.queue_container}>
                <Like/>
                <Like/>
                <Like/>
            </div>      
        )
    }
  
}

export default QueueContainer
