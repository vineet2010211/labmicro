import React from 'react' ;
import { NavLink } from 'react-router-dom'


function Nav() {
  return (
    <ul className="nav">
        <li>
            <NavLink exact activeClassName='active' to ='/'>
              Home
            </NavLink>
        </li>

        <li>
            <NavLink activeClassName='active' to ='/people'>
              People
            </NavLink>
        </li>

        <li>
            <NavLink activeClassName='active' to ='/projects'>
              Projects
            </NavLink>
        </li>

        <li>
            <NavLink activeClassName='active' to ='/process'>
              Process
            </NavLink>
        </li>
    </ul>
  )
}

export default Nav;
