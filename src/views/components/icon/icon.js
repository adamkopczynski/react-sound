import React from 'react'
import './icon.css'

const Icon  = ({src, size}) => {

  return(
    <img src={src} className={ size==='small' ? 'icon small' : 'icon large'} alt='icon'/>
  )
}

export default Icon
