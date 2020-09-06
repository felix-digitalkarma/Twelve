import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import DashboardNavComponent from '../../../../components/nav/DashboardNavComponent';


const EditComponent = (props) => {

  const { id } = props.match.params;
  const { getDuckById, duck } = props;
  const [editDuck, setEditDuck] = useState(duck);

  useEffect(() => {
    getDuckById(id);
  }, getDuckById);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditDuck({ ...editDuck, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateDuck(editDuck);

  };

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteDuck(id);
    props.history.replace('/ducks');
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={2} sm={3} md={3} lg={3} className='d-none d-sm-block pt-10'>
          Side Nav
        </Col>
        <Col xs={10} sm={9} md={9} lg={9} className='bg-dark pt-10'>
          <Container fluid>
            <Row>
              <Col>
                <h3 className='text-light'>
                  <i className='fas fa-egg mr-10'></i>
										Editing:{' '}
                  <span className='text-primary'>
                    {duck.firstName} {duck.lastName}
                  </span>
                </h3>
              </Col>
              <Col>
                <Link to='/ducks'>
                  <Button color='primary' className='btn brand-btn float-right'>
                    <i className='fas fa-arrow-left mr-10'></i>
											Back
										</Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Container className='bg-form p-3' fluid>

                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <label className='text-light font-bold'>First Name</label>
                          <input
                            name='firstName'
                            type='text'
                            value={duck.firstName}
                            onChange={(e) => handleChange(e)}
                            placeholder='Donald'
                            className='form-control'
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <label className='text-light font-bold'>Last Name</label>
                          <input
                            name='lastName'
                            type='text'
                            value={duck.lastName}
                            onChange={(e) => handleChange(e)}
                            placeholder='Duck'
                            className='form-control'
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <label className='text-light font-bold'>Email</label>
                          <input
                            name='email'
                            type='text'
                            value={duck.email}
                            onChange={(e) => handleChange(e)}
                            placeholder='donaldduck@ducks.com'
                            className='form-control'
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <label className='text-light font-bold'>Phone No </label>
                          <input
                            name='phone'
                            type='text'
                            value={duck.phone}
                            onChange={(e) => handleChange(e)}
                            placeholder='800-555-1212'
                            className='form-control'
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <FormGroup>
                          <input
                            type='submit'
                            value='submit'
                            className='btn btn-success brand-btn float-right'
                          />
                          <Button
                            color='danger'
                            className='brand-btn float-left'
                            onClick={e => handleDelete(e)}
                          >
                            <i className='fas fa-trash mr-10'></i> Delete
														</Button>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>


                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}


export default EditComponent;
