import React from 'react'

import LoadingProvider from 'react-useloading'
import 'react-useloading/dist/index.css'
import Hello from './Hello'

const App = () => {
  return (
    <LoadingProvider>
      <Hello/>
    </LoadingProvider>
  )
}

export default App
