import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const LoginComponent = props => {
  const { login } = props;
  const [formData, setFormData] = useState({ email: '', password: '' });
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const { email, password } = formData;

  const onSubmit = async e => {
    e.preventDefault();
    login(formData);
  };

  return (
    <Fragment>
      <div className='container m-10-20 d-block'>
        <form onSubmit={onSubmit}>
          <div className='form-group'></div>
          <div className='form-group text-left'>
            <label htmlFor='email' className='text-light'>
              Email
						</label>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              className='form-control lcp-input'
              value={email}
              onChange={onChange}
              required
              autoComplete='false'
            />
          </div>
          <div className='form-group text-left'>
            <label htmlFor='password' className='text-light'>
              Password
						</label>
            <input
              type='password'
              placeholder='Password'
              name='password'
              className='form-control lcp-input'
              value={password}
              onChange={onChange}
              autoComplete='false'
            />
          </div>
          <div className='row text-center'>
            <p className='text-primary w-100'>Forgot your password?</p>
          </div>
          <div className='form-group'>
            <Button type='submit' className='lcp-btn btn-primary'>
              Login
						</Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

LoginComponent.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  role: PropTypes.number,
};

export default LoginComponent;
