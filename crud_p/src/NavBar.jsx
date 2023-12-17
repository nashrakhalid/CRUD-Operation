import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className= 'navcontainer'>
          <aside className= 'logoBlock'>
              <h1 className='navHeading'>LOGO</h1>
          </aside>
          <aside className = "menuBlock">
              <ul>
                  <NavLink to = '/'>
                      <li>HOME</li>
                  </NavLink>
                  <NavLink to = '/addemp'>
                      <li>ADD EMP</li>
                  </NavLink>
                  <NavLink to = '/viewall'>
                      <li>VIEW ALL</li>
                  </NavLink>
              </ul>
          </aside>
      </nav>
    </>
  )
}

export default NavBar
