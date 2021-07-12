import React from 'react'
import { useParams, useRouteMatch } from 'react-router'

export default function ProfileInfo() {
  const params = useParams()
  const match = useRouteMatch
  // console.log(match)
  return <div>ProfileInfo</div>
}
