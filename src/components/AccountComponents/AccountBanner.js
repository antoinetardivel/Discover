import React, {Component} from 'react'
import profilImg from './img/profil.jpg'
import editProfil from './img/edit_profile.svg'
import styles from './Account.module.css'



class AccountBanner extends Component{
    

    render(){
        return (
            <div className={styles.account_banner}>
                <div className={styles.profil_img_container}>  
                    <img src={profilImg}/>
                    <img src={editProfil}/>
                </div>
                <div className={styles.banner_info_container}>
                    <div>
                        <p>5</p>
                        <p>Playlists</p>
                    </div>
                    <div>
                        <p>23</p>
                        <p>Abonnés</p>
                    </div>
                    <div>
                        <p>67</p>
                        <p>Abonnements</p>
                    </div>
                </div>
            </div>
    
            
        )
    }
    
  }


  export default AccountBanner