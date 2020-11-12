import React, {Component} from 'react'
import Player from '../Player'
import MenuAudioPlayer from '../Menu/MenuAudioPlayer'





class PlayerAppearOnclick extends Component{
    
    constructor() {
        super();
        this.state = {
          name: "React",
          playerComponent: false,
          menuPlayerComponent: true

        };
        this.hideComponent = this.hideComponent.bind(this);
      }

      hideComponent(name) {
        switch (name) {
            case "playerComponent":
                this.setState({ playerComponent: !this.state.playerComponent });
                this.setState({ menuPlayerComponent: !this.state.menuPlayerComponent });
                break;
          
        }
      }


    render(){
        const { playerComponent, menuPlayerComponent} = this.state;
        

        return (
            <div className="test">
                <p onClick={() => this.hideComponent("playerComponent") } >aaaaa</p>
                 {playerComponent && <Player />} 
                 {menuPlayerComponent && <MenuAudioPlayer />} 
            </div>
    
            
        )
    }
    
  }


  export default PlayerAppearOnclick