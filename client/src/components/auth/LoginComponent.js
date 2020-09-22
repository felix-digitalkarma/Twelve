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
            <Row>
              <Col>
                <form onSubmit={onSubmit}>
                  <h3 className="navbar-brand text-light"><i className="fas fa-fire mr-10"></i>Twelve.Community</h3>

                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={onChange}
                      placeholder="Email address"
                      required autoFocus />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>
                  <div className="form-label-group">
                    <input type='password'
                      id="inputPassword"
                      placeholder='Password'
                      name='password'
                      className='form-control text-left'
                      value={password}
                      onChange={onChange} />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <div className='row text-center'>
                    <p className='text-primary w-100'>Forgot your password?</p>
                  </div>
                  <div className='form-group p-3'>
                    <Button
                      type='submit'
                      className='lcp-btn btn-primary'>Login</Button>
                  </div>
                </form>
              </Col>
            </Row>


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
