import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';

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
    <Container fluid>
      <Row>
        <Col>
          <Container>
            <form onSubmit={onSubmit}>
              <span className="navbar-brand text-light"><i className="fas fa-fire mr-10"></i>Twelve.Community</span>
              <div className='form-group text-left'>
                <label htmlFor='email' className='text-light'>
                  Email
						</label>
                <input
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  className='form-control'
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
                  className='form-control'
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

          </Container>
        </Col>
      </Row>
    </Container>

  );
};

LoginComponent.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  role: PropTypes.number,
};

export default LoginComponent;
