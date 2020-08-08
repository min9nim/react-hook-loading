import React from 'react'
// import styles from './Loading.module.css'

const modalStyle = {
  position: 'fixed',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  opacity: '0.7',
  backgroundColor: '#111',
}
const loadingStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  'background-color': '#fff',
  padding: '2px',
  '-webkit-transform': 'translate(-50%, -50%)',
  '-ms-transform': 'translate(-50%, -50%)',
  '-moz-transform': 'translate(-50%, -50%)',
  '-o-transform': 'translate(-50%, -50%)',
  transform: 'translate(-50%, -50%)',
}

export default function Loading() {
  return (
    <React.Fragment>
      <div style={modalStyle} />
      <div style={loadingStyle}>Loading..</div>
    </React.Fragment>
  )
}
