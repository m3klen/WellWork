import type React from 'react'
import classNames from 'classnames'

import { CLASS_NAME } from './const'
import { type HomeProps } from './types'
import { propTypes, defaultProps } from './props'


import './style.css'
import * as C from '../../components'

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const { className } = props
  const finalClassName = classNames(CLASS_NAME, className)

  return (
    <>
      <C.Header/>
    </>
  )
}

Home.propTypes = propTypes
Home.defaultProps = defaultProps

export default Home
export { CLASS_NAME, type HomeProps }
