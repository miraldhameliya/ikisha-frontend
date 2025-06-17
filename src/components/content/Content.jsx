import React from 'react'
import { Outlet } from 'react-router-dom'

const Content = () => {
  return (
    <div>
      {/* <Header/> */}
      <Outlet />
    </div>
  )
}

export default Content
