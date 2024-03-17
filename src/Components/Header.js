import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
      return (
            <>
                  <nav>
                        This time we are going to to create something amazing
                  </nav>

                  <div className='header'>
                        <Link to="/">Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>

                        <Link to='/user/tempid'>User</Link>
                        <Link to='/user/:id'>User</Link>
                  </div>
            </>
      )
}

export default Header
