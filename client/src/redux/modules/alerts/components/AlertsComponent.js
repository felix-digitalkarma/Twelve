import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Alert } from 'reactstrap';

const AlertComponent = ({ alerts }) => {
	return (
		<Container className='fixed-top'>
			<Row>
				<Col>
					{alerts &&
						alerts.map(alert => (
							<Alert key={alert.id} color={alert.alertType} className='d-block w-100 text-center' fade>
								{alert.msg}
							</Alert>
						))}
				</Col>
			</Row>
		</Container>
	);
};

AlertComponent.propTypes = {
	alerts: PropTypes.array.isRequired,
};

export default AlertComponent;
