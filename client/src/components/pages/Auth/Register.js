import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import avatar18 from '../../assets/images/faces/18.png';

const RegistrationPageComponent = props => {
	const { registerUser, auth } = props;
	const { isAuthenticated } = auth;
	const [formData, setFormData] = useState({
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		fax: '',
		avatar: avatar18,
		company: '',
		position: '',
		street: '',
		city: '',
		state: '',
		zip: '',
		remail: '',
		password: '',
		password2: '',
	});

	const {
		firstname,
		lastname,
		phone,
		fax,
		avatar,
		email,
		street,
		city,
		state,
		zip,
		company,
		position,
		remail,
		password,
		password2,
	} = formData;

	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async e => {
		e.preventDefault();

		if (password !== password2) {
			setAlert('Passwords do not match.', 'danger');
		} else if (email !== remail) {
			setAlert('Emails do not match.', 'danger');
		} else {
			registerUser(formData);
		}
	};

	if (isAuthenticated) {
		return <Redirect to='/' />;
	}

	return (
		<Container className='text-light bg-dark ' fluid>
			<Row>
				<Col className='p-3'>
					<h1 className='text-light'>Web Account Information</h1>
					<p className='text-muted'>
						Welcome to Lucky Chicken. After registration, you will receive a confirmation email from us
						within 24 hours.
					</p>
				</Col>
			</Row>
			<Row>
				<Col className='p-3'>
					<form onSubmit={onSubmit}>
						<Row>
							<Col md='6' className='bg-form p-3'>
								<h4 className='text-light text-center border-primary p-2'>New User Information</h4>
								<div className='form-row'>
									<div className='form-group col-md-6'>
										<label htmlFor='firstname'>
											First Name <span className='text-muted'>(required)</span>
										</label>
										<input
											type='text'
											name='firstname'
											className='form-control'
											placeholder='First name'
											id='firstname'
											s
											value={firstname}
											onChange={onChange}
											required
										/>
										<div className='invalid-feedback'>Valid first name is required.</div>
									</div>
									<div className='form-group col-md-6'>
										<label htmlFor='lastname'>
											Last name <span className='text-muted'>(required)</span>
										</label>
										<input
											type='text'
											name='lastname'
											className='form-control'
											id='lastname'
											placeholder='Last name'
											value={lastname}
											onChange={onChange}
											required
											autoComplete='false'
										/>
										<div className='invalid-feedback'>Valid last name is required.</div>
									</div>
								</div>
								<div className='form-row'>
									<div className='form-group col'>
										<label htmlFor='email'>
											Email <span className='text-muted'>(required)</span>
										</label>
										<input
											type='text'
											name='email'
											id='email'
											className='form-control'
											placeholder='Email'
											value={email}
											onChange={onChange}
											autoComplete='false'
										/>
									</div>
									<div className='invalid-feedback text-light'>
										Please enter a valid email address for shipping updates.
									</div>
								</div>
								<div className='form-row'>
									<div className='form-group col'>
										<label htmlFor='remail'>
											Confirm Email <span className='text-muted'>(required)</span>
										</label>
										<input
											type='text'
											name='remail'
											id='remail'
											value={remail}
											onChange={onChange}
											required
											className='form-control'
											placeholder='Confirm email'
										/>
										<div className='invalid-feedback'>
											Please enter a valid email address for shipping updates.
										</div>
									</div>
								</div>
								<div className='form-row'>
									<div className='form-group col'>
										<label htmlFor='password'>
											Password <span className='text-muted'>(required)</span>
										</label>
										<input
											type='password'
											name='password'
											id='password'
											value={password}
											onChange={onChange}
											required
											autoComplete='false'
											className='form-control'
											placeholder='Password'
										/>
										<div className='invalid-feedback'>Please enter a valid password.</div>
									</div>
								</div>
								<div className='form-row'>
									<div className='form-group col'>
										<label htmlFor='password2'>Confirm Password</label>
										<input
											type='password'
											name='password2'
											id='password2'
											value={password2}
											onChange={onChange}
											autoComplete='false'
											className='form-control'
											placeholder='Confirm Password'
										/>
										<div className='invalid-feedback'>
											Please enter a valid email address for shipping updates.
										</div>
									</div>
								</div>
								<div className='form-row'>
									<div className='form-group col-md-6'>
										<label htmlFor='phone'>
											Phone <span className='text-muted'>(required)</span>
										</label>
										<input
											type='text'
											name='phone'
											id='phone'
											value={phone}
											onChange={onChange}
											className='form-control'
											placeholder='Phone (required)'
											required
										/>
										<div className='invalid-feedback'>Valid phone number is required.</div>
									</div>
									<div className='form-group col-md-6'>
										<label htmlFor='fax'>Fax</label>
										<input
											type='text'
											name='fax'
											id='fax'
											value={fax}
											onChange={onChange}
											className='form-control'
											placeholder='Fax'
										/>
										<div className='invalid-feedback'>Valid last name is required.</div>
									</div>
								</div>
							</Col>

							<Col md='6' className='bg-form  p-3'>
								<h4 className='text-light border-primary text-center p-2'>Profile Information</h4>
								<div className='form-row p-2'>
									<div className='avatar w-100 text-center'>
										<img
											alt='Profile Avatar'
											className='img-thumbnail rounded-circle '
											src={avatar || avatar18}
										/>
									</div>
								</div>
								<div className='form-row'>
									<div className='form-group w-100'>
										<label htmlFor='company'>Company</label>
										<input
											type='text'
											name='company'
											id='company'
											className='form-control'
											placeholder='Company'
											value={company}
											onChange={onChange}
										/>
									</div>
									<div className='invalid-feedback'>
										Please enter a valid company name for order updates.
									</div>
								</div>
								<div className='form-row'>
									<div className='form-group w-100 mb-25'>
										<label htmlFor='position'>Position</label>
										<input
											type='text'
											name='position'
											id='position'
											className='form-control'
											placeholder='Position'
											value={position}
											onChange={onChange}
										/>
									</div>
									<div className='invalid-feedback'>
										Please enter a valid company name for order updates.
									</div>
								</div>

								<div className='form-row'>
									<div className='form-group col'>
										<label htmlFor='street'>Street</label>
										<input
											type='text'
											name='street'
											id='street'
											className='form-control'
											placeholder='Street'
											value={street}
											onChange={onChange}
										/>
										<div className='invalid-feedback'>Please enter your shipping address.</div>
									</div>
								</div>
								<div className='form-row'>
									<div className='form-group col-md-3'>
										<label htmlFor='city'>City</label>
										<input
											type='text'
											name='city'
											id='city'
											className='form-control'
											placeholder='City'
											value={city}
											onChange={onChange}
										/>
										<div className='invalid-feedback'>Please enter a valid city.</div>
									</div>
									<div className='form-group col-md-6'>
										<label htmlFor='state'>State</label>
										<select
											name='state'
											id='state'
											value={state}
											onChange={onChange}
											className='form-control h35'
										>
											<option value=''>Choose State</option>
											<option value='AL'>Alabama</option>
											<option value='AK'>Alaska</option>
											<option value='AZ'>Arizona</option>
											<option value='AR'>Arkansas</option>
											<option value='CA'>California</option>
											<option value='CO'>Colorado</option>
											<option value='CT'>Connecticut</option>
											<option value='DE'>Delaware</option>
											<option value='DC'>District Of Columbia</option>
											<option value='FL'>Florida</option>
											<option value='GA'>Georgia</option>
											<option value='HI'>Hawaii</option>
											<option value='ID'>Idaho</option>
											<option value='IL'>Illinois</option>
											<option value='IN'>Indiana</option>
											<option value='IA'>Iowa</option>
											<option value='KS'>Kansas</option>
											<option value='KY'>Kentucky</option>
											<option value='LA'>Louisiana</option>
											<option value='ME'>Maine</option>
											<option value='MD'>Maryland</option>
											<option value='MA'>Massachusetts</option>
											<option value='MI'>Michigan</option>
											<option value='MN'>Minnesota</option>
											<option value='MS'>Mississippi</option>
											<option value='MO'>Missouri</option>
											<option value='MT'>Montana</option>
											<option value='NE'>Nebraska</option>
											<option value='NV'>Nevada</option>
											<option value='NH'>New Hampshire</option>
											<option value='NJ'>New Jersey</option>
											<option value='NM'>New Mexico</option>
											<option value='NY'>New York</option>
											<option value='NC'>North Carolina</option>
											<option value='ND'>North Dakota</option>
											<option value='OH'>Ohio</option>
											<option value='OK'>Oklahoma</option>
											<option value='OR'>Oregon</option>
											<option value='PA'>Pennsylvania</option>
											<option value='RI'>Rhode Island</option>
											<option value='SC'>South Carolina</option>
											<option value='SD'>South Dakota</option>
											<option value='TN'>Tennessee</option>
											<option value='TX'>Texas</option>
											<option value='UT'>Utah</option>
											<option value='VT'>Vermont</option>
											<option value='VA'>Virginia</option>
											<option value='WA'>Washington</option>
											<option value='WV'>West Virginia</option>
											<option value='WI'>Wisconsin</option>
											<option value='WY'>Wyoming</option>
										</select>
										<div className='invalid-feedback'>Please provide a valid state.</div>
									</div>
									<div className='form-group col-md-3'>
										<label htmlFor='zip'>Zip</label>
										<input
											type='text'
											name='zip'
											id='zip'
											value={zip}
											onChange={onChange}
											className='form-control'
											placeholder='Zip'
										/>
										<div className='invalid-feedback'>Zip code required.</div>
									</div>
								</div>
							</Col>
						</Row>
						<Row>
							<Col className='bg-form p-3'>
								<h4 className='text-light border-primary text-center p-2'>
									TERMS &amp; CONDITIONS OF USE
								</h4>
								<div className='terms-detail p-4 h-200 bg-light overflow-auto  text-grey'>
									<p>
										Welcome to www.luckychickenproductions.com. Lucky Chicken Productions, LLC
										and/or its affiliates ("LCP", "our", "we", "us") provide website features and
										rental equipment services (the "Services") to you (hereinafter "Renter", "you",
										"your") when you visit or rent through www.luckychickenproductions.com.
									</p>
									<ol style={{ listStyleType: 'decimal' }}>
										<li>
											<b>Site.</b>
											<br />
											<br />
											This web site, www.luckychickenproductions.com, is hereinafter referred to
											as the "Site". These Terms and Conditions of Use include Site Terms,
											Conditions, Notices and Disclaimers (hereinafter collectively referred to as
											the "Terms")
											<br />
											<br />
										</li>
										<li>
											<b>About These Terms.</b>
											<br />
											<br />
											These Terms apply to your use of this Site and our Services. By accessing
											the Site and/or our Services you are deemed to have accepted these Terms in
											their entirety. If you do not agree to any of these Terms you must stop
											using the Site and/or stop using our Services.
											<br />
											<br />
											We may at any time revise these Terms without advance notice. You are
											responsible for reviewing these Terms on each occasion that you visit the
											Site. If you continue to use the Site after changes are made to the Terms
											you are deemed to have accepted them.
											<br />
											<br />
										</li>
										<li>
											<b>Intellectual Property (IP) Rights.</b>
											<br />
											<br />
											<b>COPYRIGHT</b>
											<br />
											<br />
											All content included in or made available through this Site or the Services,
											such as text, graphics, logos, button icons, images, audio clips, digital
											downloads, data compilations, and software is the property of LCP or its
											content suppliers and protected by United States and international copyright
											laws. The compilation of all content included in or made available through
											this Site and the Services is the exclusive property of LCP and protected by
											U.S. and international copyright laws.
											<br />
											<br />
											<b>COPYRIGHT COMPLAINTS</b>
											<br />
											<br />
											LCP respects the intellectual property of others. If you believe that your
											work has been copied in a way that constitutes copyright infringement,
											please submit your complaint to us here hello@luckychickenproductions.com
											and include the following information:
											<br />
											<br />
											<ul>
												<li>
													A physical signature of the person authorized to act on behalf of
													the owner of the copyright interest;
												</li>
												<li>
													A description of the copyrighted work that you claim has been
													infringed upon;
												</li>
												<li>
													A description of where the material that you claim is infringing is
													located on the Site;
												</li>
												<li>Your address, telephone number, and e-mail address;</li>
												<li>
													A statement by you that you have a good-faith belief that the
													disputed use is not authorized by the copyright owner, its agent, or
													the law;
												</li>
												<li>
													A statement by you, made under penalty of perjury, that the above
													information in your notice is accurate and that you are the
													copyright owner or authorized to act on the copyright owner's
													behalf.
												</li>
											</ul>
											<br />
											<br />
											We aim to respond quickly to the concerns of rights owners about any alleged
											infringement.
											<br />
											<br />
											<b>TRADEMARKS</b>
											<br />
											<br />
											In addition, graphics, logos, page headers, button icons, scripts, and
											service names included in or made available through this Site or the
											Services may be trademarks or considered trade dress of LCP in the United
											States. LCP's trademarks and trade dress may not be used in connection with
											any product or service that is not LCP's, in any manner that is likely to
											cause confusion among customers, or in any manner that disparages or
											discredits LCP. All other trademarks not owned by LCP that appear on this
											Site are the property of their respective owners, who may or may not be
											affiliated with or connected to LCP.
											<br />
											<br />
										</li>
										<li>
											<b>Registration of Account.</b>
											<br />
											<br />
											In order to access our Services via this Site, you will be required to sign
											up for an account with us. When you register, you agree to provide true,
											accurate, up to date and complete information. If you use our Services, you
											are responsible for maintaining the confidentiality of your account and
											password and for restricting access to your computer, and you agree to
											accept responsibility for all activities that occur under your account or
											password. Your account and any registration information you provide will be
											protected as described in our{' '}
											<Link to='/privacy' target='_blank' style={{ color: '#f7be1b' }}>
												Privacy and Security Policy
											</Link>
											. Use of this Site and/or the Services is restricted to adults over the age
											of eighteen (18) years of age. By using the Site or registering for an
											account to access our Services, you are certifying that you are eighteen
											(18) years of age or older. We reserve the right to refuse service,
											terminate accounts, remove or edit content, block users or cancel orders in
											our sole discretion.
											<br />
											<br />
										</li>
										<li>
											<b>License and Access.</b>
											<br />
											<br />
											Subject to your compliance with these Terms, LCP grants you a limited,
											non-exclusive, non-transferable, non-sublicensable license to access and
											make personal and non-commercial use of our Site and Services. This license
											does not include any resale or commercial use of the LCP Site or its
											contents; any collection and use of any equipment listings, descriptions, or
											prices; any derivative use of this Site or its contents; any downloading,
											copying, or other use of account information for the benefit of any third
											party; or any use of data mining, robots, or similar data gathering and
											extraction tools. All rights not expressly granted to you in these Terms are
											reserved and retained by LCP or its licensors, suppliers, publishers,
											rightsholders, or other content providers. This Site, nor any part of this
											Site, may be reproduced, duplicated, copied, sold, resold, visited, or
											otherwise exploited for any commercial purpose without the prior express
											written consent of LCP. You may not frame or utilize framing techniques to
											enclose any trademark, logo, or other proprietary information (including
											images, text, page layout, or form) of LCP without first obtaining our
											express written consent. You may not use any meta tags or any other "hidden
											text" utilizing LCP's name or trademarks without the prior express written
											consent of LCP. You may not misuse the LCP Site or Services. You may use
											this Site and our Services only as permitted by LCP and as permitted by law.
											The licenses granted by LCP terminate if you do not comply with these Terms
											and/or the terms of any other LCP policy or agreement with LCP.
											<br />
											<br />
										</li>
										<li>
											<b>Acceptable Use.</b>
											<br />
											<br />
											It is impossible to provide an exhaustive list of exactly what constitutes
											acceptable and unacceptable use of this Site. In general, we will not
											tolerate any use of our Site or Services which damages or is likely to
											damage our reputation, the availability or integrity of the Site or our
											Services or which causes us or threatens to cause us to incur any legal, tax
											or regulatory liability.
											<br />
											<br />
											You must treat our Site with respect, and not use the Site or our Services
											for any illegal purpose, or in such a way as to infringe or breach the
											rights of others or to cause or threaten to cause us damage. You are also
											responsible for complying with any relevant notices, policies and terms
											imposed by third parties whose website, products or services may be
											accessible through our Site or Services. We reserve the right to suspend the
											use of our Site generally or block your access to any part of the Site or
											the Service and/or to suspend or terminate your rights to use the Site or
											the Services, including your account.
											<br />
											<br />
										</li>
										<li>
											<b>Links.</b>
											<br />
											<br />
											This Site may include links that allow you to leave this Site and visit
											third party web sites. This Site does not exercise control over linked sites
											and is not responsible for the content, use by you or availability of those
											third party web sites, for any products or services you buy through those
											sites or for the treatment of any personal information you provide to the
											third party.
											<br />
											<br />
											Any products, services and websites of third party providers that may be
											available via this Site are owned and operated by independent third parties.
											<br />
											<br />
										</li>
										<li>
											<b>Privacy.</b>
											<br />
											<br />
											This Site includes areas where you are requested to input information about
											yourself. Any personal data you submit to us through this Site shall be
											subject to the terms of our{' '}
											<Link to='/privacy' target='_blank' style={{ color: '#f7be1b' }}>
												Privacy and Security Policy
											</Link>{' '}
											.<br />
											<br />
										</li>
										<li>
											<b>Disclaimer of Representations and Warranties.</b>
											<br />
											<br />
											<b>CONTENT</b>
											<br />
											<br />
											We take steps to ensure that all information we provide on this Site is
											correct and complete at the time of the last update to the relevant page,
											but we do not warrant that it will be correct and complete at the time that
											you view it.
											<br />
											<br />
											<b>AVAILABILITY</b>
											<br />
											<br />
											Use of this Site is free and we take steps to ensure it is available to all
											permitted users. We do not warrant that the Site will be continuously
											available, or that your use of the Site will be uninterrupted or error-free,
											or that the Site and server will be free from attack.
											<br />
											<br />
											<b>DISCLAIMER.</b>
											<br />
											<br />
											THE SERVICES ARE OFFERED ON AN "AS IS," "WHERE IS," AND "WHERE AVAILABLE"
											BASIS, WITH NO WARRANTY OF ANY KIND � WHETHER EXPRESS, IMPLIED, OR STATUTORY
											� INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF TITLE OR THE IMPLIED
											WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. THIS DOES
											NOT AFFECT THOSE WARRANTIES WHICH ARE INCAPABLE OF EXCLUSION, RESTRICTION,
											OR MODIFICATION UNDER THE LAWS APPLICABLE TO THIS AGREEMENT. YOU ACKNOWLEDGE
											THAT NEITHER LUCKY CHICKEN PRODUCTIONS, LLC, ITS AFFILIATES, NOR ANY OF
											THEIR RESPECTIVE EMPLOYEES, AGENTS, THIRD PARTY CONTENT PROVIDERS, OR
											LICENSORS WARRANT THAT THE SERVICES OR THE SITE WILL BE UNINTERRUPTED OR
											ERROR FREE; NOR DO THEY MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE
											OBTAINED FROM USE OF THE SERVICES OR THE SITE, OR AS TO THE TIMELINESS,
											SEQUENCE, ACCURACY, RELIABILITY, COMPLETENESS, OR CONTENT OF ANY
											INFORMATION, SERVICE, OR MERCHANDISE PROVIDED THROUGH THE SERVICES AND THE
											SITE. LUCKY CHICKEN PRODUCTIONS, LLC DOES NOT ENDORSE PRODUCTS OR SERVICES
											APPEARING ON LINKED SITES OR PURCHASED VIA LINKED SITES. EXCEPT AS
											SPECIFICALLY PROVIDED IN THESE TERMS OR WHERE THE LAW REQUIRES A DIFFERENT
											STANDARD, YOU AGREE THAT LUCKY CHICKEN PRODUCTIONS, LLC IS NOT RESPONSIBLE
											FOR ANY LOSS, PROPERTY DAMAGE, OR BODILY INJURY, WHETHER CAUSED BY ACCESS TO
											OR USE OF THE SERVICES OR THE SITE. TO THE MAXIMUM EXTENT PERMISSIBLE UNDER
											APPLICABLE LAW, LUCKY CHICKEN PRODUCTIONS, LLC WILL NOT BE RESPONSIBLE TO
											YOU OR ANY THIRD PARTY CLAIMING THROUGH YOU FOR ANY DIRECT, INDIRECT,
											SPECIAL OR CONSEQUENTIAL, ECONOMIC OR OTHER DAMAGES ARISING IN ANY WAY OUT
											OF THE INSTALLATION OR USE OF THE SERVICES, THE SITE, ANY ON-LINE SERVICES
											OR INTERNET BROWSER SOFTWARE, INCLUDING LIABILITY ASSOCIATED WITH ANY
											COMPUTER VIRUSES WHICH MAY INFECT YOUR COMPUTER SYSTEM.
											<br />
											<br />
										</li>
										<li>
											<b>Governing Law and Venue.</b>
											<br />
											<br />
											Any and all challenges and/or legal claims shall be governed solely by the
											laws of the state of California without regard to principals on conflict of
											laws.
											<br />
											<br />
										</li>
										<li>
											<b>Indemnification.</b>
											<br />
											<br />
											You agree to defend, indemnify, and hold harmless LCP, its affiliates, and
											their respective directors, officers, employees, and agents from and against
											all claims and expenses, including attorneys' fees, arising out of your
											violation of these Terms or your acts or omissions in the use of the
											Services or this Site, including such violation or acts or omissions in the
											use of the Services or the Site conducted by your employee or agent, if
											applicable.
											<br />
											<br />
										</li>
										<li>
											<b>Site Policies, Modification, and Severability.</b>
											<br />
											<br />
											Please review our other policies, such as our{' '}
											<Link to='/privacy' target='_blank' style={{ color: '#f7be1b' }}>
												Privacy and Security Policy
											</Link>{' '}
											and{' '}
											<Link
												to='/uploads/LCP-EQUIPMENT-LEASE-AGREEMENT.pdf'
												target='_blank'
												style={{ color: '#f7be1b' }}
											>
												Equipment Rental Agreement
											</Link>{' '}
											posted on this Site. These policies also govern your use of our Services. We
											reserve the right to make changes to our Site, policies, and these Terms at
											any time. If any of these conditions shall be deemed invalid, void, or for
											any reason unenforceable, that condition shall be deemed severable and shall
											not affect the validity and enforceability of any remaining condition.
											<br />
											<br />
										</li>
										<li>
											<b>Waiver.</b>
											<br />
											<br />
											Our failure to exercise or delay in exercising a right or remedy provided by
											these Terms or by law does not constitute a waiver of those or any other
											rights or remedies.
											<br />
											<br />
										</li>
										<li>
											<b>Updates/Changes to Terms.</b>
											<br />
											<br />
											These terms may be updated at any time and without advance notification.
											<br />
											<br />
										</li>
										<li>
											<b>Contact Us.</b>
											<br />
											<br />
											For questions regarding these Terms, this Site or our Services, please
											contact us at{' '}
											<a
												href='/mailto:hello@luckychickenproductions.com'
												style={{ color: '#f7be1b' }}
											>
												hello@luckychickenproductions.com
											</a>
											.<br />
											<br />
										</li>
									</ol>
								</div>
								<div className='signature-field text-center mt-4'>
									<span className='text-light mr-10'>Digital Signature </span>
									<Button className='btn-grey disabled' onClick={() => console.log('agreed terms')}>
										I Agree To Terms
									</Button>
								</div>
							</Col>
						</Row>
						<Row>
							<Col>
								<div className='p-3 text-center'>
									<input type='submit' name='btn' className='btn btn-primary' value='Register' />
								</div>
							</Col>
						</Row>
					</form>
				</Col>
			</Row>
		</Container>
	);
};

export default RegistrationPageComponent;
