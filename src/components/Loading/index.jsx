import React from 'react'
import styles from './loading.modules.scss';

const Loading = () => {
  return (
    <div className="loader">
        <div className="loader__circle"></div>
        <div className="loader__circle"></div>
        <div className="loader__circle"></div>
        <div className="loader__circle"></div>
        <div className="loader__circle"></div>
    </div>
  )
}

export default Loading