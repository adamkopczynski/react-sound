import React from 'react'
import TrackCard from '../../components/track-card'


class TracksContainer extends React.Component {
  render(){
    return(
      <div className='row tracks'>
          {this.props.tracks.map(track => <TrackCard
                                            title={track.title}
                                            img={track.artwork_url}
                                            author={track.user.username}
                                            id={track.id}/>)}
      </div>
    )
  }
}

export default TracksContainer;
