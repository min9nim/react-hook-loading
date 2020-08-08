import React from 'react'
import styles from './Loading.module.css'

export default function Loading() {
  return (
    <React.Fragment>
      <div className={styles.modal_div} />
      <div className={styles.Loading}>Loading..</div>
    </React.Fragment>
  )
}
