import React, {Component} from 'react'
import AccountBanner from './AccountBanner'
import AccountContent from './AccountContent'





class AccountComponent extends Component{
    

    render(){
        return (
            <div>
                <AccountBanner/>
                <AccountContent/>
            </div>
    
            
        )
    }
    
  }


  export default AccountComponent