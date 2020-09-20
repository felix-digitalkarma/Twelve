import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import Moment from 'react-moment';
import { FileIcon } from '../../../../components/partials/icons';

const OrderInfo = ({ order }) => {
  const formatMoney = (money) => '$' + money;
  const columns = [
    { dataField: 'name', text: 'Line Item', footer: '' },
    {
      dataField: 'total',
      text: 'Total',
      formatter: formatMoney,
      footer: () => '$' + order.total,
    },
  ];
  return (
    <Card className='mb-3 bg-dark text-light'>
      <Link
        to={`#collapse${order._id}`}
        data-toggle='collapse'
        data-target={`#collapse${order._id}`}
        className='text-decoration-none'
      >
        <CardHeader
          id={`heading${order._id}`}
          className='border border-primary text-light bg-black'
        >
          <FileIcon /> Rental:{' '}
          <Moment format='MM/DD/YYYY'>{order.created}</Moment> Order:{' '}
          {order.code}
        </CardHeader>
      </Link>
      <div id={`collapse${order._id}`} class='collapse'>
        <CardBody>
          <BootstrapTable
            keyField='_id'
            data={order.items}
            columns={columns}
            headerClasses='bg-primary text-dark'
            footerClasses='text-primary'
            classes='text-light'
          />
        </CardBody>
      </div>
    </Card>
  );
};

OrderInfo.propTypes = {
  order: PropTypes.shape({
    items: PropTypes.array,
    _id: PropTypes.string,
    created: PropTypes.string,
    code: PropTypes.string,
  }),
};

export default OrderInfo;
