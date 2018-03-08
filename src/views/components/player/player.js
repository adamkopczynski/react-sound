import React from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {hidePlayer, showPlayer, setPlayer, play, pause} from '../../../actions/player'
import YouTube from 'react-youtube'


import './player.css'

const mapStateToProps = ({player}) => ({
  url: player.playerUrl,
  player: player.player,
  isActive: player.playerActive,
  isVisible: player.visible,
  isPlaying: player.isPlaying
})

const mapDispatchToProps = (dispatch) => ({
  hidePlayer: () => dispatch(hidePlayer()),
  showPlayer: () => dispatch(showPlayer()),
  setPlayer: player => dispatch(setPlayer(player)),
  play: () => dispatch(play()),
  pause: () => dispatch(pause())
})

const opts = {
    height: '290',
    width: '440',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }

class Player extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool,
    isVisible: PropTypes.bool,
    player: PropTypes.object,
    url: PropTypes.string,
    isPlaying: PropTypes.bool
  }

  handleClick(event){
    if(this.props.isActive ){
      if(this.props.isVisible){
        this.props.hidePlayer()
      }
      else {
        this.props.showPlayer()
      }
    }

  }

  _controlPlaying(){
    if(this.props.isPlaying){
      this.props.player.pauseVideo()
      this.props.pause()
    }
    else{
      this.props.player.playVideo()
      this.props.play()
    }
  }
  render(){
    return(
      <div className={this.props.isVisible ? 'player active' : 'player hidden'}>
          <button className='player__visibility-btn' onClick={this.handleClick.bind(this)}>
              <i className='fas fa-angle-down'></i>
          </button>
          <button className='play-btn' onClick={this._controlPlaying.bind(this)}>
            {this.props.isPlaying ?
              <i className= "material-icons">play__arrow</i>:
              <i className="material-icons">&#xE037;</i>
            }
          </button>
          <YouTube
            className='hide'
            videoId={this.props.url}
            opts={opts}
            onReady={this._onReady.bind(this)}
          />
      </div>
    )
  }

  _onReady(event) {
    this.props.setPlayer(event.target)
    console.log(event.target)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
