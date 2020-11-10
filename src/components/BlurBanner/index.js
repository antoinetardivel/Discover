import React, {Component} from 'react'
import styles from './BlurBanner.module.css'
import profilImg from './img/profil.jpg'





class BlurBanner extends Component{
    

    render(){
        return (
            <div className={styles.blur_img_container}>
                <img src={profilImg} alt=""/>
            </div>
    
            
        )
    }
    
  }


  export default BlurBanner