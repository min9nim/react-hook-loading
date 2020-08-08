import React, { useContext, useState } from 'react'
import Loading from './Loading'

const dec = num => {
  if (num === 0) {
    throw Error('Cannot decrease loading count as current count is 0')
  }
  return --num
}
const inc = num => ++num

const LoadingCtx = React.createContext()

export function LoadingProvider(props) {
  const [count, setCount] = useState(0)
  const value = {
    loading: Boolean(count),
    setLoading: start => (start ? setCount(inc) : setCount(dec)),
  }

  return (
    <LoadingCtx.Provider value={value}>
      {props.children}
      {value.loading && (props.loading || <Loading />)}
    </LoadingCtx.Provider>
  )
}

export const useLoading = () => {
  const { loading, setLoading } = useContext(LoadingCtx)
  return [loading, setLoading]
}
