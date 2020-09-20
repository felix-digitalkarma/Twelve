import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import InsuranceInfo from './InsuranceInfo';

const UserInsurance = (props) => {
  useEffect(() => {
    props.userId && props.getInsurance(props.userId);
  }, [props.userId]);

  const insuranceList = props.users.insurance.map((ins) => (
    <InsuranceInfo key={ins._id} insurance={ins} />
  ));

  return (
    <div>
      <p>This is a list of the insurance policies uploaded by this user</p>
      <div>{insuranceList}</div>
    </div>
  );
};

UserInsurance.propTypes = {
  userId: PropTypes.string,
  getInsurance: PropTypes.func.isRequired,
  users: PropTypes.shape({
    insurance: PropTypes.array,
  }),
};

export default UserInsurance;
