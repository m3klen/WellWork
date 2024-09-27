import type React from 'react'
import classNames from 'classnames'
import { useState, useEffect } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, useAuth } from '../auth/AuthContext/AuthContext';

import { CLASS_NAME } from './const'
import { type HeaderProps } from './types'
import { propTypes, defaultProps } from './props'

import './style.css'

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { isLoggedIn, logout } = useAuth();
  const { className } = props
  const finalClassName = classNames(CLASS_NAME, className)
  const [selectedNav, setSelectedNav] = useState('');

  useEffect(() => {
    if (location.pathname === '/home') {
      setSelectedNav('home');
    } else if (location.pathname === '/') {
      setSelectedNav('home');
    } else if (location.pathname === '/login') {
      setSelectedNav('login');
    }
}, [location.pathname]);

  return (
    <header className={finalClassName}>
      <Link to="/login" className={`${CLASS_NAME}-logo`}>Well<strong>Work</strong></Link>

      <nav className={`${CLASS_NAME}-content-wrapper`}>
        <a
          href="/home"
          className={selectedNav === 'home' ? `${CLASS_NAME}-selected-nav` : `${CLASS_NAME}-not-selected`}
          >
            Hjem
        </a>

        <a
          href="/tools"
          className={selectedNav === 'tools' ? `${CLASS_NAME}-selected-nav` : `${CLASS_NAME}-not-selected`}
          >
            Værktøjer
        </a>

        <a
          href="/courses"
          className={selectedNav === 'courses' ? `${CLASS_NAME}-selected-nav` : `${CLASS_NAME}-not-selected`}
          >
            Kursus
        </a>

        <a
          href="/forum"
          className={selectedNav === 'forum' ? `${CLASS_NAME}-selected-nav` : `${CLASS_NAME}-not-selected`}
          >
            Forum
        </a>

        <a
          href="/mentorship"
          className={selectedNav === 'mentorship' ? `${CLASS_NAME}-selected-nav` : `${CLASS_NAME}-not-selected`}
          >
            Mentor
        </a>

        <a
          href="/help"
          className={selectedNav === 'help' ? `${CLASS_NAME}-selected-nav` : `${CLASS_NAME}-not-selected`}
          >
            Hjælp
        </a>
      </nav>

      {!isLoggedIn ? (
        <>
          <Link to="/login" className={selectedNav === 'login' ? `${CLASS_NAME}-nav-link ${CLASS_NAME}-profile-btn` : `${CLASS_NAME}-nav-link ${CLASS_NAME}-profile-btn`}>Login</Link>
        </>
      ) : (
        <>
          <Link to="/profile" className={`${CLASS_NAME}-nav-link ${CLASS_NAME}-profile-btn`}>Profil</Link>
        </>
      )}
      
    </header>
  )
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
export { CLASS_NAME, type HeaderProps }