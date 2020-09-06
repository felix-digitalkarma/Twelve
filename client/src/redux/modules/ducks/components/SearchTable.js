import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchTable = props => {
  const { ducks } = props;
  const formatLink = id => {
    return (
      <Link to={`/ducks/edit/${id}`} className='text-primary text-center'>
        <i className='fa fa-edit'></i>
      </Link>
    );
  };
  const formatCompleted = completed => {
    return completed === true ? "true" : "false";
  };
  const columns = [
    {
      dataField: 'firstName',
      text: 'First',
      sort: true,
    },
    {
      dataField: 'lastName',
      text: 'Last',
      sort: true,
    },
    {
      dataField: 'email',
      text: 'Email',
      sort: true,
    },
    {
      dataField: 'phone',
      text: 'Phone',
      sort: true,
    },
    {
      dataField: 'completed',
      text: 'Completed',
      formatter: formatCompleted,
      sort: true,
    },
    {
      dataField: '_id',
      text: 'Edit', // should import reusable component for this
      formatter: formatLink,
      searchable: false,
    },
  ];

  return (
    <Fragment>
      <h1>Search Table</h1>
    </Fragment>
  );
};

SearchTable.propTypes = {
  ducks: PropTypes.array,
};

export default SearchTable;
