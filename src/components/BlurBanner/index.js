import React from 'react'
import styles from './BlurBanner.module.css'
import profilImg from './img/profil.jpg'
    
  

const BlurBanner = (prop) => {

    let imgArtist = ''
    console.log(prop)

    if (prop.imageArtist) {
       imgArtist = prop.imageArtist
    } else {
        imgArtist = profilImg
    }

    return (
        
        <div className={styles.blur_img_container}>
            <img src={imgArtist} alt=""/>
            <div className={styles.filter}></div>
        </div>

        
    )
}


  export default BlurBanner