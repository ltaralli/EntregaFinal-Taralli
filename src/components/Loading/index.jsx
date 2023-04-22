import React from 'react'
import styles from './loading.modules.scss';

const Loading = () => {
  return (
    <div class="loader">
        <div class="loader__circle"></div>
        <div class="loader__circle"></div>
        <div class="loader__circle"></div>
        <div class="loader__circle"></div>
        <div class="loader__circle"></div>
    </div>
  )
}

export default Loading