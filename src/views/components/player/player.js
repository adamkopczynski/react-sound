import React from 'react'
import {addTracks} from '../../../actions/tracks'
import {connect} from 'react-redux'

import './player.css'


class Player extends React.Component {
  render(){

    return(
      <div className='player'>
          <button className='play-btn'><i className="fas fa-play"></i></button>
      </div>
    )
  }
}

export default Player;
