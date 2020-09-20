import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import UsersTable from './UsersTable';
import DashboardNavComponent from '../../../../components/nav/DashboardNavComponent';

const UsersList = props => {
	const [toggled, setToggledState] = useState(false);
	useEffect(() => {
		props.getUsers();
	}, []);

	return (
		<Container fluid>
			<Row>
				<Col xs={2} sm={3} md={3} lg={3} className='d-none d-sm-block pt-10'>
					<DashboardNavComponent title='Users' />
				</Col>
				<Col xs={10} sm={9} md={9} lg={9} className='bg-dark pt-10'>
					<Container fluid>
						<Row>
							<Col>
								<Link to='users/create'>
									<Button color='success' className='brand-btn mtb-10 float-right'>
										<i className='fas fa-user mr-10'></i>
										Create User
									</Button>
								</Link>
							</Col>
						</Row>
						<Row>
							<Col>
								<UsersTable {...props} />
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

UsersList.propTypes = {
	getUsers: PropTypes.func,
};

export default UsersList;
