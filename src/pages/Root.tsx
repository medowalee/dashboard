import React from 'react'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
      <header>
        <h1>hi</h1>
      </header>



      <Outlet />
    </div>
  )
}

export default Root
