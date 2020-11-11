import React from 'react'
import album from './img/album.png'
import styles from './Player.module.css'


class PlayerProgressionBar extends React.Component {
   
    componentDidMount(){
        const progress = document.getElementById('progress');
        const countSpan = document.getElementById('count');
        const musicDuration = 215;
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
                timer += 1;
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
    }

    render(){
        
        return (
            <div className={styles.counter_container}>
                 <p><span id="count">00 : 00</span> | 03 : 35</p>
                <div className={styles.svg_container}>
                    <img className={styles.album} alt="" src={album}/>
                    <svg className={styles.progress} width="250" height="250" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="54" fill="none" stroke="#28f299" stroke-width="3" />
                        <circle id="progress" className={styles.progress__value} cx="60" cy="60" r="54" fill="none" stroke="#707070" stroke-width="3" />
                    </svg>
                </div>
            </div>
        )
    }
  
}

export default PlayerProgressionBar
