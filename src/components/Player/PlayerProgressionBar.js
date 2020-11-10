import React, {Component} from 'react'

import styles from './Player.module.css'


class PlayerProgressionBar extends React.Component {
   
  
    render(){
        
        return (
            <div id="container">
                <svg id="svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle r="90" cx="100" cy="100" fill="transparent" stroke="#fff" stroke-width="3" stroke-dasharray="565" stroke-dashoffset="100"></circle>
                    <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
                </svg>
            </div>
        )
    }
  
}

export default PlayerProgressionBar
