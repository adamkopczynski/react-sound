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
      {trackList.map(({track}) =>
        <SingleTrack
          key={track.items[0].id}
          title={track.items[0].snippet.title}
          author={track.items[0].snippet.channelTitle}
          img={track.items[0].snippet.thumbnails.default.url}
        />)}
    </div>
  )
}

TrackList.propTypes = {
  trackList: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(TrackList)
