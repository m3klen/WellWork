import type React from 'react'
import classNames from 'classnames'
import { useState } from 'react'

import { CLASS_NAME } from './const'
import { type LoginProps } from './types'
import { propTypes, defaultProps } from './props'

import * as C from '../../index'

import './style.css'

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const { login } = C.useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { className } = props
  const finalClassName = classNames(CLASS_NAME, className)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8081/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      login(email);
      window.location.href = '/home';
      console.error(response);
      setError(" ")
    } else {
      setError("error")
    }
  };

  return (
    <>
      <C.Header></C.Header>
      <div className={finalClassName}>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <p className={`${CLASS_NAME}-email-pass`}>Indtast din email og adgangskode.</p>
          <p className={error === 'error' ? `${CLASS_NAME}-error` : `${CLASS_NAME}-error disable`}>Login mislykkedes, se om dine oplysninger er korrekte!</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Adgangskode"
            required
          />
          <p className={`${CLASS_NAME}-register-txt`}>Har du ikke en konto? <a href="/register">TRYK HER</a></p>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}

Login.propTypes = propTypes
Login.defaultProps = defaultProps

export default Login
export { CLASS_NAME, type LoginProps }