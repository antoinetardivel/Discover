import React, {Component} from 'react'
import profilImg from './img/profil.jpg'
import styles from './Account.module.css'
import AccountEachSong from './AccountEachSong'
import BtnGradient from '../BtnGradient/index'



class AccountContent extends Component{
    
    
    render(){

        return (
            <div className={styles.account_content_container}>
                <h1 className={styles.morceaux_plus_ecoutes}>Morceaux les plus écoutés</h1>
                <AccountEachSong/>
                <BtnGradient/>
            </div>
    
            
        )
    }
    
  }


  export default AccountContent