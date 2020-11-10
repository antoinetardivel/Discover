import React, {Component} from 'react'
import profilImg from './img/profil.jpg'
import styles from './Account.module.css'



class AccountContent extends Component{
    

    render(){
        return (
            <div className={styles.account_content_container}>
                <h1 className={styles.morceaux_plus_ecoutes}>Morceaux les plus écoutés</h1>
            </div>
    
            
        )
    }
    
  }


  export default AccountContent