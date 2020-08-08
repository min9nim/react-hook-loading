import React from 'react'

import {LoadingProvider} from 'react-hook-loading'
import 'react-hook-loading/dist/index.css'
import Hello from './Hello'

const App = () => {
  return (
    <LoadingProvider>
      <Hello/>
    </LoadingProvider>
  )
}

export default App
