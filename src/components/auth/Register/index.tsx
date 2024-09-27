import type React from 'react'
import classNames from 'classnames'
import { useState } from 'react'

import { CLASS_NAME } from './const'
import { type RegisterProps } from './types'
import { propTypes, defaultProps } from './props'

import * as C from '../../index'

import './style.css'

const Register: React.FC<RegisterProps> = (props: RegisterProps) => {
  const { login } = C.useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const { className } = props
  const finalClassName = classNames(CLASS_NAME, className)

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setAge(selectedDate);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8081/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, age }),
    });

    if (response.ok) {
      login(email);
      window.location.href = '/home';
    } else {
      console.error('Registration failed');
    }
  };

  return (
    <>
      <C.Header></C.Header>
      <div className={finalClassName}>
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
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
          <input
            type="date"
            value={age}
            onChange={handleDateChange}
            placeholder="Vælg din fødselsdato"
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  )
}

Register.propTypes = propTypes
Register.defaultProps = defaultProps

export default Register
export { CLASS_NAME, type RegisterProps }