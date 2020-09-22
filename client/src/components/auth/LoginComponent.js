import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';

const LoginComponent = props => {
  const { login } = props;
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

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
              <h3 className="navbar-brand text-light"><i className="fas fa-fire mr-10"></i>Twelve.Community</h3>

              <div className="form-label-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Email address"
                  required autofocus />
                <label for="inputEmail">Email address</label>
              </div>
              <div className="form-label-group">
                <input type='password'
                  placeholder='Password'
                  name='password'
                  className='form-control text-left'
                  value={password}
                  onChange={onChange} />
                <label for="inputPassword">Password</label>
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
