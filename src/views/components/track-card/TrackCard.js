import React from 'react'

import Icon from '../icon'
import PlayIcon from '../../../images/icon.png'

import './TrackCard.css'

const TrackCard = () => {
  return(
    <div className='track-card'>
      <Icon size='large' src={PlayIcon} />
      <p className='track-card__title'>Title</p>
      <p className='track-card__author'>Author</p>
    </div>
  )
}

export default TrackCard
