import React, {Component} from 'react'
import styles from './Menu.module.css'




class MenuProgressBar extends Component{
    componentDidMount(){
        let i = 0;
        const progressBar = document.getElementById('progress');
        let musicLength = 240;

        setInterval(()=>{
            progressBar.style.width = i/musicLength * 100 + "%";
            i++;
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