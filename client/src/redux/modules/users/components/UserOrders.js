import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import OrderInfo from './OrderInfo';

const UserOrders = (props) => {
  // TODO: this works for everything, but order_items aren't populating.
  // can restore once they do.
  /*useEffect(() => {
    props.userId && props.getOrders(props.userId);
  }, [props.userId]);*/

  const rentalList = props.users.orders.map((ord) => (
    <OrderInfo key={ord._id} order={ord} />
  ));
  return (
    <div>
      <h3>Rental Orders</h3>
      <div>{rentalList}</div>
    </div>
  );
};

UserOrders.propTypes = {
  userId: PropTypes.string,
  getInsurance: PropTypes.func.isRequired,
  users: PropTypes.shape({
    orders: PropTypes.array,
  }),
};

export default UserOrders;
