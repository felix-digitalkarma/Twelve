import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import SearchTable from '../../../../components/common/Layout/SearchTable';
import {
  StarCircle,
  TimesCircle,
  CheckCircle,
  EditIcon,
} from '../../../../components/partials/icons';

const UsersTable = (props) => {
  const editLink = (id) => {
    return (
      <Link className='text-primary' to={`users/edit/${id}`}>
        <EditIcon />
      </Link>
    );
  };

  const formatVip = (bool) => {
    return bool ? <StarCircle /> : <TimesCircle />;
  };

  const formatRole = (role) => {
    const roles = ['Admin', 'Editor', 'Customer'];
    return roles[role - 1];
  };

  const formatActive = (bool) => {
    return bool ? <TimesCircle /> : <CheckCircle />;
  };

  const formatMoment = (date) => {
    return <Moment format='MM/DD/YYYY'>{date}</Moment>;
  };

  const formatName = (cell, row) => {
    return `${cell} ${row.lastname}`;
  };

  const columns = [
    {
      dataField: 'firstname',
      text: 'Name',
      formatter: formatName,
      sort: true,
    },
    {
      dataField: 'email',
      text: 'Username',
      sort: true,
    },
    {
      dataField: 'role',
      text: 'Role',
      formatter: formatRole,
      sort: true,
    },
    {
      dataField: 'vip',
      text: 'VIP',
      formatter: formatVip,
      sort: true,
    },
    {
      dataField: 'created',
      text: 'Created',
      formatter: formatMoment,
      sort: true,
    },
    {
      dataField: 'is_deleted',
      text: 'Active',
      formatter: formatActive,
      sort: true,
    },
    {
      dataField: '_id',
      text: 'Edit',
      formatter: editLink,
    },
  ];

  return (
    <Fragment>
      <SearchTable
        data={props.users.usersList}
        columns={columns}
        keyField='_id'
      />
    </Fragment>
  );
};

UsersTable.propTypes = {
  users: PropTypes.shape({
    usersList: PropTypes.array,
  }),
};

export default UsersTable;
