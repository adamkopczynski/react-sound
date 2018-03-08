import React from'react'
import PropTypes from 'prop-types'

import './ContentHeader.css'

const ContentHeader = ({title}) => {
  return(
    <div className='content-header'>
      <h1 className='content-header__title'> {title} </h1>
    </div>
  )
}

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default ContentHeader
