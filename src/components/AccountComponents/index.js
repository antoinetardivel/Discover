import React, {Component} from 'react'
import BlurBanner from '../BlurBanner'
import AccountBanner from './AccountBanner'
import AccountContent from './AccountContent'
import Player from '../Player'





class AccountComponent extends Component{
    

    render(){
        return (
            <div>
                {/* <Player/> */}
                <BlurBanner imgName="aaa"/>
                <AccountBanner/>
                <AccountContent/>
            </div>
    
            
        )
    }
    
  }


  export default AccountComponent