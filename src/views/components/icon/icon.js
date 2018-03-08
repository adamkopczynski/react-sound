import React from 'react'
import PropTypes from 'prop-types'

import './icon.css'

const Icon  = ({src, size}) => {

  return(
    <img src={src} className={ size==='small' ? 'icon small' : 'icon large'} alt='icon'/>
  )
}

Icon.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string
}

export default Icon
