import React from 'react'
import Content from '../content/Content'
import Header from '../dashboard/Header'
import { AddModalProvider } from '../dashboard/AddModalComponent'

function DefaultLayout() {
  return (
    <AddModalProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="p-3">
          <Content />
        </div>
      </div>
    </AddModalProvider>
  )
}

export default DefaultLayout
