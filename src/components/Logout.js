import React from 'react'
import { Link  } from 'react-router-dom'

const Logout = () => {
  return (
    <div>
        <h1>Successfully logged-out</h1>
       <Link to={'/'} >go to again login page</Link>
    </div>
  )
}

export default Logout