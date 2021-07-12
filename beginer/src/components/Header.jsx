import React, { useEffect } from 'react'
import { path } from '../App'
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom'

export default function Header() {
  const history = useHistory()

  const location = useLocation()

  // useEffect(() => {
  //   console.log(location)
  // }, [location])
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
        <li>
          <NavLink to={path.profile}>Profile</NavLink>
        </li>
        <button onClick={() => history.push(path.profile)}>chuyển sang profile</button>
      </ul>
    </div>
  )
}
