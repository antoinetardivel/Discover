import React from 'react'
import albumImg1 from './img/AlbumMoody.PNG'
import style from './AlbumIcon.module.css'

function AlbumIcon(){
    return(
        <div className={style.albumListConter}>
            <div>
                <img  className={style.imgAlbum} src={albumImg1}  alt='pochette de l album '/>
                <h3>Flawless </h3>  
            </div>
            <div>
                <img  className={style.imgAlbum} src={albumImg1}  alt='pochette de l album '/>
                <h3>Flawless </h3>  
            </div>
            <div>
                <img  className={style.imgAlbum} src={albumImg1}  alt='pochette de l album '/>
                <h3>Flawless </h3>  
            </div>
            
        </div>
    )
}
export default AlbumIcon