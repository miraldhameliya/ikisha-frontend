import React from 'react'
import Content from '../content/Content'

function DefaultLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <Content />
      </main>
    </div>
  )
}

export default DefaultLayout
