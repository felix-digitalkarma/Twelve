import React, { Fragment, useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import defaultImg from '../../../../assets/images/logos/lcp_logo.png';
import { InsuranceIcon, OrderHistory } from '../../../../components/partials/icons';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Row, Col, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import DashboardNavComponent from '../../../../components/nav/DashboardNavComponent';

import UserForm from './UserForm';
import UserInsurance from './UserInsurance';
import UserOrders from './UserOrders';

const UserPage = props => {
	const history = useHistory();
	const { id } = useParams();
	const { form } = props.users;
	const [activeTab, setActiveTab] = useState('1');

	const toggleTab = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	useEffect(() => {
		if (id) {
			props.getProfile(id);
			props.getAddress(id);
		} else {
			props.clear();
		}
		return () => props.clear();
	}, [id]);

	return (
		<Container fluid>
			<Row>
				<Col xs={2} sm={3} md={3} lg={3} className='d-none d-sm-block pt-10'>
					<DashboardNavComponent title='Users' />
				</Col>

				<Col xs={10} sm={9} md={9} lg={9} className='bg-dark pt-10'>
					<Container fluid className='no-gutters'>
						<Row>
							<Col sm={{ size: 2, offset: 1 }}>
								<Nav vertical tabs className='text-light border-bottom-0'>
									<NavItem className={clsx('text-center mb-0', activeTab === '1' && 'active')}>
										<NavLink
											className={clsx(
												'border-right-0  px-0 py-3',
												activeTab === '1' ? 'active bg-dark text-light' : 'bg-dark'
											)}
											onClick={() => {
												toggleTab('1');
											}}
										>
											<img
												className='rounded-circle mx-auto d-block'
												src={form.avatar ? form.avatar : defaultImg}
												width={64}
												height={64}
												alt='user avatar'
											/>
											<p>{`${form.user.firstname} ${form.user.lastname}`}</p>
										</NavLink>
									</NavItem>
									<NavItem className={clsx('text-center mb-0', activeTab === '2' && 'active')}>
										<NavLink
											className={clsx(
												'border-right-0 px-0 py-3',
												activeTab === '2' ? 'active bg-dark text-light' : 'bg-dark'
											)}
											onClick={() => {
												toggleTab('2');
											}}
										>
											<div>
												<InsuranceIcon />
											</div>
											Insurance
										</NavLink>
									</NavItem>
									<NavItem className={clsx('text-center mb-0', activeTab === '3' && 'active')}>
										<NavLink
											className={clsx(
												'border-right-0 px-0 py-3',
												activeTab === '3' ? 'active bg-dark text-light' : 'bg-dark'
											)}
											onClick={() => {
												toggleTab('3');
											}}
										>
											<div>
												<OrderHistory />
											</div>
											Rental Orders
										</NavLink>
									</NavItem>
								</Nav>
							</Col>
							<Col sm={9}>
								<TabContent
									activeTab={activeTab}
									className='border border-primary border-rounded-right p-4'
									style={{ minHeight: '302px' }}
								>
									<TabPane className='text-light' tabId='1'>
										<UserForm {...props} />
									</TabPane>
									<TabPane className='text-light' tabId='2'>
										<UserInsurance userId={id} {...props} />
									</TabPane>
									<TabPane className='text-light' tabId='3'>
										<UserOrders userId={id} {...props} />
									</TabPane>
								</TabContent>
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

UserPage.propTypes = {
	users: PropTypes.shape({
		form: PropTypes.object,
	}),
	getProfile: PropTypes.func,
	clear: PropTypes.func,
};

export default UserPage;
