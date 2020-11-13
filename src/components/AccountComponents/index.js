import React, {Component} from 'react'
import BlurBanner from '../BlurBanner'
import AccountBanner from './AccountBanner'
import AccountContent from './AccountContent'
import Player from '../Player'
import PlayerAppearOnclick from '../PlayerAppearOnclick/index'





const AccountComponent = ()=>{ 
    return (
        <div>
            <BlurBanner/>
            <AccountBanner/>
            <AccountContent/>
        </div>

        
    )
}



  export default AccountComponent