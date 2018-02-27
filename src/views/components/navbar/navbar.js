import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import logo from '../../../images/logo.png'
import Search from '../search'

const Navbar = (props) => {
  return(
    <nav className='navbar'>
      <Link to='/'>
        <img src={logo} alt='logo' className='logo'/>
      </Link>
      <Search />
      <button className='btn'>Popular</button>
      <div className='links'>
        <Link to='/about'>
          About
        </Link>
        <Link to='/about'>
          <i className="fab fa-github"></i>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
