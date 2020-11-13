import React, {Component, useContext} from 'react'
import Player from '../Player'
import MenuAudioPlayer from '../Menu/MenuAudioPlayer'
import AppContext from '../../AppContext'





const PlayerAppearOnclick = ()=>{
  const context = useContext(AppContext);
  console.log(context);

  

  return (
    <div className="test">
      {context.isPlayerOpen && <Player />} 
      {context.isPlayerOpen !== true && <MenuAudioPlayer />}
    </div>
  )
}
  
  


  export default PlayerAppearOnclick