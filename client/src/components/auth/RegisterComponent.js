import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

const RegisterComponent = props => {
  const { registerUser, setAlert, auth } = props;
  const { isAuthenticated } = auth;
  const [formData, setFormData] = useState({
    firstName: '',
    lastInitial: '',
    email: '',
    phone: '',
    remail: '',
    password: '',
    password2: '',
  });

  const {
    firstName,
    lastInitial,
    phone,
    email,
    remail,
    password,
    password2,
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('Passwords do not match.', 'danger');
    } else if (email !== remail) {
      setAlert('Emails do not match.', 'danger');
    } else {
      registerUser(formData);
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Container className='text-dark bg-light' fluid="md" >
      <Row>
        <Col className='p-3'>
          <h1 className='text-dark'>Registration</h1>
          <p className='text-muted'>
            Welcome to Twelve.Community. Our primary mission is to create a safe and secure platform for all to share personal stories of recovery, become involved with our communities through service, guiding others through sponsorship, and supporting our local and global communities through charitable donation.
					</p>
          <h4 className='text-center'>The Basics</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <form onSubmit={onSubmit}>
            <Row>
              <Col>

                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='firstName'>
                      First Name
										</label>
                    <input
                      type='text'
                      name='firstName'
                      className='form-control'
                      placeholder='First name'
                      id='firstName'
                      value={firstName}
                      onChange={onChange}
                      required
                    />
                    <div className='invalid-feedback'>Valid first name is required.</div>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='lastInitial'>
                      Last Intial <span className='text-muted'>(optional)</span>
                    </label>
                    <input
                      type='text'
                      name='lastInitial'
                      className='form-control'
                      id='lastInitial'
                      placeholder='Last Initial'
                      value={lastInitial}
                      onChange={onChange}
                      required
                      autoComplete='false'
                    />
                    <div className='invalid-feedback'>Valid last initial required.</div>
                  </div>
                </div>

                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='email'>
                      Email <span className='text-muted'>(required)</span>
                    </label>
                    <input
                      type='text'
                      name='email'
                      id='email'
                      className='form-control'
                      placeholder='Email'
                      value={email}
                      onChange={onChange}
                      autoComplete='false'
                    />
                  </div>
                  <div className='invalid-feedback text-light'>
                    Please enter a valid email address for community updates.
									</div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='remail'>
                      Confirm Email <span className='text-muted'>(required)</span>
                    </label>
                    <input
                      type='text'
                      name='remail'
                      id='remail'
                      value={remail}
                      onChange={onChange}
                      required
                      className='form-control'
                      placeholder='Confirm email'
                    />
                    <div className='invalid-feedback'>
                      Please enter a valid email address for community updates.
										</div>
                  </div>
                </div>

                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='password'>
                      Password <span className='text-muted'>(required)</span>
                    </label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      value={password}
                      onChange={onChange}
                      required
                      autoComplete='false'
                      className='form-control'
                      placeholder='Password'
                    />
                    <div className='invalid-feedback'>Please enter a valid password.</div>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='password2'>Confirm Password</label>
                    <input
                      type='password'
                      name='password2'
                      id='password2'
                      value={password2}
                      onChange={onChange}
                      autoComplete='false'
                      className='form-control'
                      placeholder='Confirm Password'
                    />
                    <div className='invalid-feedback'>
                      Passwords must match.
										</div>
                  </div>

                </div>

                <div className='form-row'>
                  <div className='form-group col'>
                    <label htmlFor='phone'>
                      Phone <span className='text-muted'>(optional)</span>
                    </label>
                    <input
                      type='text'
                      name='phone'
                      id='phone'
                      value={phone}
                      onChange={onChange}
                      className='form-control'
                      placeholder='Phone (optional)'
                      required
                    />
                    <div className='invalid-feedback'>Valid phone number is required.</div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className='p-3 text-center'>
                  <input type='submit' name='btn' className='btn btn-primary' value='Register' />
                </div>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterComponent;
