import React from 'react'
import ContentHeader from '../../components/content-header'
import TrackCard from '../../components/track-card'
import SC from 'soundcloud'

class Home extends React.Component {
  componentWillMount(){
    SC.initialize({
      client_id: 'd02c42795f3bcac39f84eee0ae384b00'
    });

    SC.stream('/tracks/293')
      .then(player => {
        console.log(player.currentTime())
      })
      .catch(e => {
        console.error('Playback rejected. Try calling play() from a user interaction.', e)
      })
  }
  render(){
    return(
      <div className='col-9 container-fluid page'>
          <ContentHeader title='New Releases'/>
          <div className='row tracks'>
            <TrackCard />
            <TrackCard />
            <audio controls><source src="https://soundcloud.com/alex-stevenson/munching-at-tiannas-house" /></audio>
          </div>
      </div>
    )
  }
}

export default Home;
