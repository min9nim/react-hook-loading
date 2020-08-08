# react-hook-loading

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-hook-loading.svg)](https://www.npmjs.com/package/react-hook-loading) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-hook-loading
```

## Usage

App.js
```jsx
import React from 'react'
import LoadingProvider from 'react-hook-loading'
import Hello from './Hello'

export default function App(){
  return (
    <LoadingProvider>
      <Hello/>
    </LoadingProvider>
  )
}
```

Hello.js
```jsx
import React, {useEffect} from 'react'
import {useLoading} from 'react-hook-loading'

export default () => {
  const [, setLoading] = useLoading()
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return <div>hello world!!</div>
}
```

## License

MIT © [min9nim](https://github.com/min9nim)
