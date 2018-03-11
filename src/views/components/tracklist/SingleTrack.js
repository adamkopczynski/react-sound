import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {playerRequest} from '../../../actions/player'

import Divider from '../divider'
import Icon from '../icon'
import PlayIcon from '../../../images/icon.png'

const mapDispatchToProps = (dispatch) => ({
  createPlayer: (id, title) => dispatch(playerRequest(id, title))
})

const SingleTrack = ({id,title, author, img, createPlayer}) => {
  return(
    <div className='track' onClick={() => createPlayer(id, title)}>
      <div className='row'>
        <Icon src={img ? img : PlayIcon} size='small' />
        <span>
          <p className="track__title"> {title} </p>
          <p className="track__author">{author}</p>
        </span>
      </div>
      <Divider />
    </div>
  )
}

SingleTrack.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  img: PropTypes.string
}

export default connect(()=>({}), mapDispatchToProps)(SingleTrack)
