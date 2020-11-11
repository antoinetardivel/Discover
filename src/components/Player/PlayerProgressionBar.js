import React, {Component} from 'react'

import styles from './Player.module.css'


class PlayerProgressionBar extends React.Component {
   
  
    render(){
        
        return (
            <div className={styles.demo}>
                <svg className={styles.progress} width="250" height="250" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="#28f299" stroke-width="3" />
                    <circle className={styles.progress__value} cx="60" cy="60" r="54" fill="none" stroke="#707070" stroke-width="3" />
                </svg>
            </div>
        )
    }
  
}

export default PlayerProgressionBar
