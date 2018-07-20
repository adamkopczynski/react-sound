import React from 'react'
import MuteIcon from 'react-icons/lib/md/volume-off'
import VolumeUpIcon from 'react-icons/lib/md/volume-up'

import './volume-icon.css'

const VolumeIcon = () => {
  return(
    <button className='volume-icon'>
      {
        //<MuteIcon />
        <VolumeUpIcon />
      }
    </button>
  )
}

export default VolumeIcon
