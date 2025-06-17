import React from 'react'
import Content from '../content/Content'
import Header from '../dashboard/Header'

function DefaultLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <div className="px-4 py-8">
        <Content />
      </div>
    </div>
  )
}

export default DefaultLayout
