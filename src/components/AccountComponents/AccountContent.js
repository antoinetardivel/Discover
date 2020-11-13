import React, {Component} from 'react'
import styles from './Account.module.css'
import AccountEachSong from './AccountEachSong'
import BtnGradient from '../BtnGradient/index'
import AccountPlaylist from './AccountPlaylist'



const AccountContent = ()=>{
    return (
        <div className={styles.account_content_container}>
            <h1 className={styles.morceaux_plus_ecoutes}>Morceaux les plus écoutés</h1>
            <AccountEachSong/>
            <BtnGradient/>
            <AccountPlaylist/>
        </div>   
    )
}
    
  


export default AccountContent