import React, { useContext } from 'react'
import styles from './Player.module.css'
import AppContext from '../../AppContext'

const ImgPlayer = ()=> {
   
  
        const context = useContext(AppContext);
        
        return (
            <div className={styles.img_player_container}>
                
                    <img className={styles.album} alt="" src={context.img}/>
                
            </div>
        )
    }
  


export default ImgPlayer
