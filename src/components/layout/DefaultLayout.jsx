import React from 'react'
import Content from '../content/Content'
import Header from '../dashboard/Header'

function DefaultLayout() {
  return (
    <div className=" flex flex-col bg-gray-100 overflow-hidden">
      <Header />
      <div className="flex-1 p-3 overflow-auto">
        <Content />
      </div>
    </div>
  )
}

export default DefaultLayout
