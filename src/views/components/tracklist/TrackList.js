import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import SingleTrack from './SingleTrack'

import './track.css'

const mapStateToProps = ({trackList}) => ({
  trackList: trackList.list
})


const TrackList = ({trackList}) => {
  return(
    <div className='col track-list'>
      {trackList.map(song =>
        <SingleTrack
          title={song.title}
          author={song.author}
          album={song.album}
        />)}
    </div>
  )
}

TrackList.propTypes = {
  trackList: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(TrackList)
