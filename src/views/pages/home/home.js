import React from 'react'
import ContentHeader from '../../components/content-header'
import TracksContainer from '../../components/tracks-container'
import {addTracks} from '../../../actions/tracks'
import {connect} from 'react-redux'

import Loader from '../../components/loader'


const mapDispatchToProps = (dispatch) => ({
  addTracks: () => dispatch(addTracks())
})

const mapStateToProps = ({tracks}) => ({
  tracks: tracks.tracks,
  fetchingTracks: tracks.tracksFetching
})

class Home extends React.Component {
  componentWillMount(){
    this.props.addTracks()
  }
  render(){
    return(
      <div className='col-9 container-fluid page'>
          <ContentHeader title='New Releases'/>
          {this.props.fetchingTracks ?
                          <Loader /> :
                          <TracksContainer tracks={this.props.tracks}/>
          }

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
