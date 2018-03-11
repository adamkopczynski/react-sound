import React from 'react'
import PropTypes from 'prop-types'

import TrackCard from '../../components/track-card'


class TracksContainer extends React.Component {
  static propTypes = {
    tracks: PropTypes.array
  }
  render(){
    return(
      <div className='row tracks'>
          {this.props.tracks.map((track, i) => <TrackCard
                                            key={i}
                                            title={track.snippet.title}
                                            img={track.snippet.thumbnails.default.url}
                                            author={track.snippet.channelTitle}
                                            id={track.id.videoId ? track.id.videoId : track.snippet.resourceId.videoId}
                                            />)}
      </div>
    )
  }
}

export default TracksContainer;
