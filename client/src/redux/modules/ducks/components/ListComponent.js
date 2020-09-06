import React, { useEffect } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DashboardNavComponent from '../../../../components/nav/DashboardNavComponent';
import DuckSearchTable from '../components/DuckSearchTable';

const ListComponent = props => {
  const { getDucks } = props;

  useEffect(() => {
    getDucks();
  }, [getDucks]);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Link to='/ducks/add'>
            <Button color='primary' className='brand-btn  mtb-10 float-right'>
              <i className='fas fa-egg mr-10'></i>
										Add Duck
									</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          WIP
              </Col>
      </Row>
    </Container>
  );
};

ListComponent.propTypes = {
  getDucks: PropTypes.func.isRequired,
};

export default ListComponent;
