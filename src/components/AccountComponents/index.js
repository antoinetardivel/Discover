import React, {Component} from 'react'
import BlurBanner from '../BlurBanner'
import AccountBanner from './AccountBanner'
import AccountContent from './AccountContent'





class AccountComponent extends Component{
    

    render(){
        return (
            <div>
                <BlurBanner imgName="aaa"/>
                <AccountBanner/>
                <AccountContent/>
            </div>
    
            
        )
    }
    
  }


  export default AccountComponent