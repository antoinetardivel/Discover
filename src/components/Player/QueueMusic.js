import React from 'react'
import styles from './Player.module.css'
import album1 from './img/album.png'





    const QueueMusic = () => {
    
        function EachMusic(props) {
            return(
                <div className={styles.each_queue}>
                    
                    <img alt="" src={props.imgName}/>
                    <p className={styles.title}>{props.title}</p>
                    <p className={styles.artiste}>{props.artist}</p>
                   
                </div>
            )
        }
     
    
        return (
            <div className={styles.queue_content_container}>
                <EachMusic imgName={album1} title="le titre" artist="Electro" />
                <EachMusic imgName={album1} title="le titre" artist="Chill" />
                <EachMusic imgName={album1} title="le titre" artist="Rap" />
            </div>
    
            
        )
        
        
      }


  export default QueueMusic