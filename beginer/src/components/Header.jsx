import React from 'react'
import { path } from '../App'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to={path.home}>Home</Link>
        </li>
        <li>
          <Link to={path.register}>Register</Link>
        </li>
        <li>
          <NavLink to={path.student}>Student</NavLink>
        </li>
      </ul>
    </div>
  )
}
