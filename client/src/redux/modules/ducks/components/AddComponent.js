import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import DashboardNavComponent from '../../../../components/nav/DashboardNavComponent';

const AddComponent = props => {

  const initDuck = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  const [duck, setDuck] = useState(initDuck);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDuck({ ...duck, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addDuck(duck);
    setDuck(initDuck);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={2} sm={3} md={3} lg={3} className='d-none d-sm-block pt-10'>
          Side Navigation
        </Col>
        <Col xs={10} sm={9} md={9} lg={9} className='bg-dark pt-10'>
          <Container fluid>
            <Row>
              <Col sm={10} md={10} lg={10}>
                <h1 className='text-light'>
                  <i className='fas fa-egg mr-10'></i>
										Add New Duck
									</h1>
                <p>This is a sample module that covers all CRUD operations for ducks.</p>
              </Col>
              <Col sm={2} md={2} lg={2}>
                <Link to='/ducks'>
                  <Button color='primary' className='btn brand-btn float-right'>
                    <i className='fas fa-arrow-left mr-10'></i>
											Back
										</Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className='bg-form p-3'>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='firstName'>
                      First Name <span className='text-muted'>(required)</span>
                    </label>
                    <input
                      type='text'
                      name='firstName'
                      className='form-control'
                      placeholder='First name'
                      id='firstName'
                      value={duck.firstName}
                      onChange={e => handleChange(e)}
                      required
                    />
                    <div className='invalid-feedback'>Valid first name is required.</div>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='lastName'>
                      Last Name <span className='text-muted'>(required)</span>
                    </label>
                    <input
                      type='text'
                      name='lastName'
                      className='form-control'
                      id='lastName'
                      placeholder='Last Name'
                      value={duck.lastName}
                      onChange={(e) => handleChange(e)}
                      required
                      autoComplete='false'
                    />
                    <div className='invalid-feedback'>Valid last name is required.</div>
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
                      value={duck.email}
                      onChange={(e) => handleChange(e)}
                      autoComplete='false'
                    />
                  </div>
                  <div className='invalid-feedback text-light'>
                    Please enter a valid email address for shipping updates.
										</div>

                  <div className='form-group col-md-6'>
                    <label htmlFor='phone'>
                      Phone <span className='text-muted'>(required)</span>
                    </label>
                    <input
                      type='text'
                      name='phone'
                      id='phone'
                      value={duck.phone}
                      onChange={(e) => handleChange(e)}
                      className='form-control'
                      placeholder='Phone (required)'
                      required
                    />
                    <div className='invalid-feedback'>Valid phone number is required.</div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className='p-3'>
                <Button
                  color='success'
                  className='btn brand-btn float-right'
                  onClick={e => handleSubmit(e)}
                >
                  Save
									</Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};


export default AddComponent;
