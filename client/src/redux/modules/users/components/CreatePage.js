import React from 'react';
import UserForm from './UserForm';
import { Row, Col } from 'reactstrap';
const CreatePage = props => {
	return (
		<div className='text-white' style={{ marginBottom: '200px' }}>
			<Row>
				<Col className='mx-auto' sm={8}>
					<h2 className='text-primary'>Create User</h2>
					<UserForm {...props} />
				</Col>
			</Row>
		</div>
	);
};

export default CreatePage;
