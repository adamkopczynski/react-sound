import React from 'react'

import Icon from '../icon'
import PlayIcon from '../../../images/icon.png'

import './TrackCard.css'

const TrackCard = () => {
  return(
    <div className='track-card'>
      <Icon size='large' src={PlayIcon} />
      <span className='track-card__title'>Title</span>
      <span className='track-card__author'>Author</span>
    </div>
  )
}

export default TrackCard
