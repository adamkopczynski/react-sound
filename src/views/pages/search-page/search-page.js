import React from 'react'
import ContentHeader from '../../components/content-header'
import TracksContainer from '../../components/tracks-container'
import {addTracks} from '../../../actions/tracks'
import {connect} from 'react-redux'

import Loader from '../../components/loader'


const mapStateToProps = ({search}) => ({
  tracks: search.tracks,
  fetchingTracks: search.tracksFetching
})

class SearchPage extends React.Component {
  render(){
    return(
      <div className='col-9 container-fluid page'>
          <ContentHeader title='Search results'/>
          {this.props.fetchingTracks ?
                          <Loader /> :
                          this.props.tracks.length > 0 ?
                          <TracksContainer tracks={this.props.tracks}/> :
                          'No results you must search tracks firstly'
          }

      </div>
    )
  }
}

export default connect(mapStateToProps)(SearchPage);
