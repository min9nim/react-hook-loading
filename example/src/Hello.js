import React, {useEffect} from 'react'
import {useLoading} from 'react-hook-loading'

export default () => {
  const [loading, setLoading] = useLoading()
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return <div>{loading ? 'Loading..' : 'hello world!!'}</div>
}
