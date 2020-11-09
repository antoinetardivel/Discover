import React, {Component} from 'react'
import styles from './Menu.module.css'




class MenuProgressBar extends Component{
    componentDidMount(){
        let i = 0;
        const progressBar = document.getElementById('progress');
        let musicLength = 180;

        const count = setInterval(()=>{
            i++;
            progressBar.style.width = i/musicLength * 100 + "%";
            console.log(progressBar.style.width);
            if(i/musicLength * 100 >= 100){
                clearInterval(count);
                i = 0;
                progressBar.style.transitionDuration = "0s";
                progressBar.style.width = i/musicLength * 100 + "%";
                setTimeout(()=>{
                    progressBar.style.transitionDuration = "1s";
                },1000)
            }
        },1000)


        
        
    }
    

    render(){
        return (
            <div className={styles.progress_bar_container}>
                <div id="progress" className={styles.progress_bar}></div>
            </div>
    
            
        )
    }
    
  }


  export default MenuProgressBar