import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import Moment from 'react-moment';
import { FileIcon } from '../../../../components/partials/icons';

const InsuranceInfo = ({ insurance }) => {
  const { name, _id } = insurance;
  const fields = [
    { label: 'Agent', field: insurance.agent },
    { label: 'Agent Email', field: insurance.email },
    { label: 'Agent Phone', field: insurance.phone },
    {
      label: 'Contract Start Date',
      field: <Moment format='MM/DD/YYYY'>{insurance.start}</Moment>,
    },
    {
      label: 'Contract End Date',
      field: <Moment format='MM/DD/YYYY'>{insurance.end}</Moment>,
    },
    {
      label: 'Contract Created',
      field: <Moment format='MM/DD/YYYY'>{insurance.date}</Moment>,
    },
    { label: 'Limit', field: insurance.limit },
    { label: 'Deductable', field: insurance.deductable },
  ];
  const buildField = (obj) => (
    <Col key={_id + obj.label} sm={6}>
      <Row>
        <Col md={6}>
          <Label className='text-primary'>{obj.label + ' '}</Label>
        </Col>
        <Col md={6}>
          <span>{obj.field}</span>
        </Col>
      </Row>
    </Col>
  );
  const dataFields = fields.map(buildField);
  return (
    <Card className='mb-3 bg-dark text-light text-decoration-none'>
      <Link
        to={`#collapse${_id}`}
        data-toggle='collapse'
        data-target={`#collapse${_id}`}
      >
        <CardHeader
          id={`heading${_id}`}
          className='border border-primary text-light bg-black'
        >
          <FileIcon /> Insurance: {name}
        </CardHeader>
      </Link>
      <div id={`collapse${_id}`} className='collapse'>
        <CardBody>
          <Row>{dataFields}</Row>
          <Link
            className='btn btn-primary m-2'
            color='primary'
            to={insurance.filename}
          >
            Download
          </Link>
        </CardBody>
      </div>
    </Card>
  );
};

InsuranceInfo.propTypes = {
  insurance: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    agent: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    filename: PropTypes.string,
    deductable: PropTypes.number,
    limit: PropTypes.number,
  }).isRequired,
};

export default InsuranceInfo;
