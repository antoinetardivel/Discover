import React, {Component} from 'react'
import album from './img/album.png'
import styles from './Player.module.css'


class PlayerProgressionBar extends React.Component {
   
    componentDidMount(){
        const progress = document.getElementById('progress');
        const musicDuration = 20;
        const stroke = 339.29;
        let musicTime = 1;
        const delay = setInterval(()=>{
            musicTime += stroke / musicDuration;
            progress.style.strokeDashoffset = musicTime;
            if(musicTime >= stroke){
                clearInterval(delay);
            }
        },1000)
    }

    render(){
        
        return (
            <div className={styles.demo}>
                <img className={styles.album} alt="" src={album}/>
                <svg className={styles.progress} width="250" height="250" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="#28f299" stroke-width="3" />
                    <circle id="progress" className={styles.progress__value} cx="60" cy="60" r="54" fill="none" stroke="#707070" stroke-width="3" />
                </svg>
            </div>
        )
    }
  
}

export default PlayerProgressionBar
