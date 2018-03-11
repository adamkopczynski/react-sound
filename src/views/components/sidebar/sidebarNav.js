import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {clearTrackList} from '../../../actions/tracklist.js'
import Button from '../button'

const mapDispatchToProps = (dispatch) => ({
  clearTrackList: () => dispatch(clearTrackList())
})

const SidebarNav = ({clearTrackList, addTracks}) => {
  return(
    <div className='sidebar-nav row'>

      <Button label='Save' />

      <Button onClick={() => clearTrackList()} label='Clear' />

      <Button label='Next' />
    </div>
  )
}

SidebarNav.propTypes = {
  clearTrackList: PropTypes.func.isRequired
}

export default connect(()=>({}), mapDispatchToProps)(SidebarNav);
