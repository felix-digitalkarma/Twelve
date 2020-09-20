import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Upload from './Upload';
import DashboardNavComponent from '../../../../components/nav/DashboardNavComponent';

const AWSPageComponent = () => {
	return (
		<Container fluid>
			<Row>
				<Col sm={3} md={3} lg={3} className='d-none d-sm-block pt-10'>
					<DashboardNavComponent title='AWS' />
				</Col>
				<Col sm={9} md={9} lg={9} className='bg-dark'>
					<Container>
						<Row>
							<Col className='pt-10'>
								<h1 className='text-light font-bold'>AWS Experimental Page</h1>
								<div className='Card'>
									<Upload />
								</div>
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default AWSPageComponent;
