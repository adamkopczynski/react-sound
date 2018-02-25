import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import logo from '../../../images/logo.png'

const Navbar = () => {
  return(
    <nav className='navbar'>
      <Link to='/'>
        <img src={logo} alt='logo' className='logo'/>
      </Link>
      <div className='search-box'>
        <i className='fas fa-search search-icon'></i>
        <input
          placeholder='Search...'
          type='search'
        />
      </div>
      <button className='btn'>Popular</button>
    </nav>
  )
}

export default Navbar
