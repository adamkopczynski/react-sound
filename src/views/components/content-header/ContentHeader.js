import React from'react'
import './ContentHeader.css'

const ContentHeader = ({title}) => {
  return(
    <div className='content-header'>
      <h1 className='content-header__title'> {title} </h1>
    </div>
  )
}

export default ContentHeader
