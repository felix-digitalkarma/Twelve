import React, { Fragment, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

const AuthComponent = props => {
	const { login } = props;
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async e => {
		e.preventDefault();

		login({ email: email, password: password });
	};
	return (
		<Fragment>
			<div className='container-fluid d-block'>
				<form onSubmit={onSubmit}>
					<h1 className='text-center text-primary'>Sign In</h1>
					<div className='form-group'>
						<input
							type='email'
							placeholder='Email Address'
							name='email'
							className='form-control lcp-input'
							value={email}
							onChange={onChange}
							required
							autoComplete='false'
						/>
					</div>

					<div className='form-group'>
						<input
							type='password'
							placeholder='Password'
							name='password'
							className='form-control lcp-input'
							value={password}
							onChange={onChange}
							minLength='6'
							autoComplete='false'
						/>
					</div>
					<div className='form-group'>
						<input type='submit' className='btn btn-primary' value='Login' />
					</div>
				</form>
			</div>
		</Fragment>
	);
};

export default AuthComponent;
