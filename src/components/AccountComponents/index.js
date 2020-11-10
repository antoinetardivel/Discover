import React, {Component} from 'react'
import AccountBanner from './AccountBanner'
import AccountContent from './AccountContent'
import BlurBanner from '../BlurBanner'





class AccountComponent extends Component{
    

    render(){
        return (
            <div>
                <BlurBanner/>
                <AccountBanner/>
                <AccountContent/>
            </div>
    
            
        )
    }
    
  }


  export default AccountComponent