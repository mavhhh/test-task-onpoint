import React from 'react'
import logoIcon from '../../assets/logo.png'

import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logoIcon} src={logoIcon} alt="logo" />
    </div>
  )
}
