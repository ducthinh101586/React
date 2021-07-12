import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import { path } from '../../App'
import ProfileInfo from './ProfileInfo'
import ProfilePurchase from './ProfilePurchase'
import NotFound from '../NotFound'

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        <li>
          <NavLink to={path.profile + '/info/123'}>ProfileInfo</NavLink>
        </li>
        <li>
          <NavLink to={path.profilePurchase}>ProfilePurchase</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path={path.profileInfo}>
          <ProfileInfo />
        </Route>

        <Route path={path.profilePurchase}>
          <ProfilePurchase />
        </Route>
        <Route path={path.profile} exact></Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}
