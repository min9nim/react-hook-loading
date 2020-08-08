import React, {useEffect} from 'react'
import {useLoading} from 'react-useloading'

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
