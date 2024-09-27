import type React from 'react'
import classNames from 'classnames'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import * as P from '../../pages'

import { CLASS_NAME } from './const'
import { type UIProps } from './types'
import { propTypes, defaultProps } from './props'

import './style.css'

const UI: React.FC<UIProps> = (props: UIProps) => {
  const { className } = props
  const finalClassName = classNames(CLASS_NAME, className)

  return (
    <div className={finalClassName}>
      <P.Home></P.Home>
    </div>
  )
}

UI.propTypes = propTypes
UI.defaultProps = defaultProps

export default UI
export { CLASS_NAME, type UIProps }
