import React from 'react';
import Divider from '../divider';
import Icon from '../icon';
import PlayIcon from '../../../images/icon.png';

const SingleTrack = ({title, author, album}) => {
  return(
    <div className='track'>
      <div className='row'>
        <Icon src={PlayIcon}/>
        <span>
          <p className="track__title"> {title} </p>
          <p className="track__author">{author} ({album})</p>
        </span>
      </div>
      <Divider />
    </div>
  )
}

export default SingleTrack
