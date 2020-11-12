import React from 'react'
import styles from './BlurBanner.module.css'
import profilImg from './img/profil.jpg'
    
  

const BlurBanner = (prop) => {

    let imgArtist 
    let filterImg
    let blurImg
    console.log(prop)

    if (prop.imageArtist) {
       imgArtist = prop.imageArtist
    } else {
        imgArtist = profilImg
    }

    if (prop.pArtist == 'oui') {
        filterImg = styles.filterA
        blurImg = styles.blur_img_containerA
    } else {
        filterImg = styles.filter
        blurImg = styles.blur_img_container
    }

    return (
        
        <div className={blurImg}>
            <img src={imgArtist} alt=""/>
            <div className={filterImg}></div>
        </div>

        
    )
}


  export default BlurBanner