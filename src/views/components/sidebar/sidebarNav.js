import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {clearTrackList} from '../../../actions/tracklist.js';

const mapDispatchToProps = (dispatch) => ({
  clearTrackList: () => dispatch(clearTrackList())
})

const SidebarNav = ({clearTrackList, addTracks}) => {
  return(
    <div className='sidebar-nav row'>

      <button className='btn col'>Save </button>

      <button className='btn col' onClick={() => clearTrackList()}>Clear </button>

      <button className='btn col'>Hide </button>
    </div>
  )
}

SidebarNav.propTypes = {
  clearTrackList: PropTypes.func.isRequired
}

export default connect(()=>({}), mapDispatchToProps)(SidebarNav);
