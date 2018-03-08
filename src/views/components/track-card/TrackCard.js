import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {playerRequest} from '../../../actions/player'

import Icon from '../icon'
import PlayIcon from '../../../images/icon.png'

import './TrackCard.css'

const mapDispatchToProps = (dispatch) => ({
  createPlayer: id => dispatch(playerRequest(id))
})

const TrackCard = ({title, img, author,id, createPlayer}) => {
  return(
    <div className='track-card'>
      <Icon size='large' src={img ? img : PlayIcon} />
      <span className='track-card__author' onClick={() => createPlayer(id)}>{author}</span>
      <span className='track-card__title'>{title}</span>
    </div>
  )
}

TrackCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  author: PropTypes.string.isRequired,
  createPlayer: PropTypes.func.isRequired,
}

export default connect(()=>({}), mapDispatchToProps)(TrackCard)
