import React, {useContext, useState} from 'react'
import Styles from './ResultContent.module.css'

import option from './img/option.svg'
import AppContext from '../../AppContext'

const ResultContent = (prop) => {

    const context = useContext(AppContext);
    
    

    const handleClickSong = ()=>{
        
        
        context.setPlayerOpen(context.isPlayerOpen = true)
       
    }
    console.log(prop.category)

    let imgClass;
    if (prop.category==="Artiste"){
        imgClass = Styles.result_img_artist
    }
    else {
        imgClass = Styles.result_img_single
    }


    return (
        <div onClick={handleClickSong} className={Styles.content_result}>
                <img alt="" className={imgClass} src={prop.img}/>

                <div className={Styles.text}>
                    <h2 className={Styles.result_title}>{prop.title}</h2>
                    <h3 className={Styles.result_category}>{prop.category}</h3>
                </div>                       
                <img alt="" className={Styles.result_options} src={option}/>
        </div>
    )
}

export default ResultContent