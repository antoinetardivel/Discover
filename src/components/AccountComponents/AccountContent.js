import React from 'react'
import styles from './Account.module.css'
import AccountEachSong from './AccountEachSong'
import BtnGradient from '../BtnGradient/index'
import AccountPlaylist from './AccountPlaylist'



const AccountContent = ()=>{
    return (
        <div className={styles.account_content_container}>
            <p className={styles.user_name}>Prénom Nom</p>
            <p className={styles.morceaux_plus_ecoutes}>Morceaux les plus écoutés</p>
            <AccountEachSong/>
            <BtnGradient/>
            <AccountPlaylist/>
        </div>   
    )
}
    
  


export default AccountContent