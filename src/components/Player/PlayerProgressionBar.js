import React, { useContext } from 'react'
import styles from './Player.module.css'
import AppContext from '../../AppContext'
import ImgPlayer from './ImgPlayer';

const PlayerProgressionBar =() => {
    const context = useContext(AppContext);
        setTimeout(()=>{
            const progress = document.getElementById('progress');
            const countSpan = document.getElementById('count');
            const musicDuration = context.duration / 1000;
            const musicMinute = Math.floor(musicDuration / 60);
            const musicSecond = Math.round(musicDuration - (musicMinute * 60)) ;
            document.getElementById('minute').innerHTML = musicMinute;
            document.getElementById('second').innerHTML = musicSecond;
            console.log(musicSecond)
            console.log(musicDuration)
            const stroke = 339.29;
            let musicTime = 1;
            let timer = 0;
            const delay = setInterval(()=>{
                if(musicTime >= stroke){
                    clearInterval(delay);
                }
                else{
                    musicTime += stroke / musicDuration;
                    progress.style.strokeDashoffset = musicTime;
                    timer++;
                    let minutes = Math.floor(timer / 60);
                    let second = timer - minutes * 60;
                    if(second<10 && minutes<10){
                        countSpan.innerHTML = "0" + minutes + " : 0" + second;
                    }
                    else if(minutes<10){
                        countSpan.innerHTML = "0" + minutes + " : " + second;
                    }
                    else if(minutes>=10 && second<10){
                        countSpan.innerHTML =  minutes + " : 0" + second;
                    }
                    else{
                        countSpan.innerHTML = minutes + " : " + second;
                    }
                    
                    

                }
                
            },1000)
        })

        
        
        return (
            <div className={styles.counter_container}>
                 <p><span id="count">00 : 00</span> | 0<span id="minute"></span> : <span id="second"></span></p>
                <div className={styles.svg_container}>
                    <ImgPlayer/>
                    <svg className={styles.progress} width="250" height="250" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="54" fill="none" stroke="#28f299" strokeWidth="3" />
                        <circle id="progress" className={styles.progress__value} cx="60" cy="60" r="54" fill="none" stroke="#707070" strokeWidth="3" />
                    </svg>
                </div>
            </div>
        )
    }
  


export default PlayerProgressionBar
