import React, {Component} from 'react'
import Player from '../Player'





class PlayerAppearOnclick extends Component{
    
    constructor() {
        super();
        this.state = {
          name: "React",
          playerComponent: false

        };
        this.hideComponent = this.hideComponent.bind(this);
      }

      hideComponent(name) {
        switch (name) {
          case "playerComponent":
            this.setState({ playerComponent: !this.state.playerComponent });
            break;
          
        }
      }


    render(){
        const { playerComponent} = this.state;
        

        return (
            <div className="test">
                <p onClick={() => this.hideComponent("playerComponent")} >aaaaa</p>
                 {playerComponent && <Player />} 
            </div>
    
            
        )
    }
    
  }


  export default PlayerAppearOnclick