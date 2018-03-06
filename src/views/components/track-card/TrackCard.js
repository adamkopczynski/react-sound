import React from 'react'

import Icon from '../icon'
import PlayIcon from '../../../images/icon.png'

import './TrackCard.css'

const TrackCard = ({title, img, author}) => {
  return(
    <div className='track-card'>
      <Icon size='large' src={img ? img : PlayIcon} />
      <span className='track-card__author'>{author}</span>
      <span className='track-card__title'>{title}</span>
    </div>
  )
}

export default TrackCard
