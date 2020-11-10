import React, {Component} from 'react'
import styles from './BtnGradient.module.css'



class BtnGradient extends Component{
    
    
    render(){

        return (
            <div className={styles.btn_gradient_container}>
                <button className={styles.btn_gradient}>Plus de titres</button>
            </div>
    
            
        )
    }
    
  }


  export default BtnGradient