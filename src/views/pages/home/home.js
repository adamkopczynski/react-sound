import React from 'react'
import ContentHeader from '../../components/content-header'
import TrackCard from '../../components/track-card'

class Home extends React.Component {
  render(){
    return(
      <div className='col-9 container-fluid page'>
          <ContentHeader title='New Releases'/>
          <div className='row tracks'>
            <TrackCard />
            <TrackCard />
          </div>
      </div>
    )
  }
}

export default Home;
