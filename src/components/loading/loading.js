import React from 'react'
import loadingGif from './img/loading.gif'
import style from './loading.module.css'

function loading(){
    return(
        <div className={style.loading}>
            <img className={style.loadingGif} src={loadingGif}/>
        </div>
    )
}
export default loading