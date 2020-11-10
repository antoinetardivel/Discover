import React, {Component} from 'react'
import styles from './Like.module.css'


import heart from './img/heart.svg'
import whiteHeart from './img/white_heart.svg'



class Like extends Component{


    render(){
       

        const changeLike = () => {
            const pauseImg = document.getElementById('like');
        
            if(pauseImg.src.includes(whiteHeart)){
                pauseImg.setAttribute('src', heart);
            }
            else{
                pauseImg.setAttribute('src', whiteHeart);
            }
        }
    
        return (
            <div>
                <img id="like" onClick={()=> changeLike()} src={heart} />
            </div>
    
        )
    }
    
  }


  export default Like