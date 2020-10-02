import React, { useState } from 'react';
import styled from 'styled-components';
import { useUserStore } from '../contexts/users';

const Wrapper = styled.div`
padding: 20px;
`;

export const Register = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastInitial: '',
    email: '',
    phone: '',
    password: '',
  });

  const {
    firstName,
    lastInitial,
    email,
    phone,
    password,
  } = formData;

  const [state, actions] = useUserStore();
  const { data } = state;
  console.log('data from state: ', data);

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.create(formData);
  }
  return (
    <Wrapper>
      <h1>Register Form</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          name='firstName'
          className='form-control'
          placeholder='First name'
          id='firstName'
          value={firstName}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          type='text'
          name='lastInitial'
          id='lastInitial'
          placeholder='Last name'
          value={lastInitial}
          onChange={(e) => onChange(e)}
          required
          autoComplete='false'
        />
        <input
          type='text'
          name='email'
          id='email'
          placeholder='Email'
          value={email}
          onChange={(e) => onChange(e)}
          autoComplete='false'
        />
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={(e) => onChange(e)}
          required
          autoComplete='false'
          placeholder='Password'
        />

        <input
          type='text'
          name='phone'
          id='phone'
          value={phone}
          onChange={(e) => onChange(e)}
          placeholder='Phone (required)'
          required
        /><br />
        <input type="submit" value="Submit" />
      </form>

    </Wrapper>
  );
}

export default Register;