import React, { Fragment, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import { StarCircle, TimesCircle } from '../../../../components/partials/icons';

const UserForm = props => {
  const history = useHistory();
  const { id } = useParams();
  const { form } = props.users;

  useEffect(() => {
    if (id) {
      props.getProfile(id);
      props.getAddress(id);
    } else {
      props.clear();
    }
    return () => props.clear();
  }, [id]);

  const handleSave = () => {
    if (id) {
      props.updateProfile(form);
      // redirect??
    } else {
      if (form.user.password !== form.user.password2) {
        props.setAlert('passwords must match', 'danger');
      } else {
        props.createProfile(form);
        props.clear();
        history.push('/users');
      }
    }
  };

  const handleDelete = () => {
    if (id) {
      props.updateProfile({
        user: { _id: id, is_deleted: !form.user.is_deleted },
      });
      history.replace('/users');
    }
  };

  return (
    <div id='users-list'>
      <Form>
        <fieldset className='border border-secondary p-2'>
          <legend className='w-auto px-1'>User</legend>
          <FormGroup>
            <Label for='firstname' className='text-primary'>
              First Name
						</Label>
            <Input
              type='text'
              id='firstname'
              name='firstname'
              value={form.user.firstname}
              onChange={e => props.formUser({ firstname: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label className='text-primary' for='lastname'>
              Last Name
						</Label>
            <Input
              type='text'
              id='lastname'
              name='lastname'
              value={form.user.lastname}
              onChange={e => props.formUser({ lastname: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label className='text-primary' for='email'>
              Email Address
						</Label>
            <Input
              type='email'
              id='email'
              name='email'
              value={form.user.email}
              onChange={e => props.formUser({ email: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label className='text-primary' for='role'>
              User Role
						</Label>
            <Input
              type='select'
              id='role'
              name='role'
              value={form.user.role}
              onChange={e => props.formUser({ role: e.target.value })}
            >
              <option value={3}>Customer</option>
              <option value={2}>Editor</option>
              <option value={1}>Admin</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label className='text-primary' for='vip'>
              VIP
						</Label>
            <CustomInput
              type='switch'
              id='vip'
              name='vip'
              checked={form.user.vip}
              label={form.user.vip ? <StarCircle /> : <TimesCircle />}
              onChange={e => props.formUser({ vip: e.target.checked })}
            />
          </FormGroup>
          {!id && (
            <Fragment>
              <FormGroup>
                <Label className='text-primary' for='password'>
                  Password
								</Label>
                <Input
                  type='password'
                  id='password'
                  name='password'
                  value={form.user.password}
                  onChange={e => props.formUser({ password: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label className='text-primary' for='password2'>
                  Verify Password
								</Label>
                <Input
                  type='password'
                  id='password2'
                  name='password2'
                  value={form.user.password2}
                  onChange={e => props.formUser({ password2: e.target.value })}
                />
              </FormGroup>
            </Fragment>
          )}
        </fieldset>
        <fieldset className='border border-secondary p-2'>
          <legend className='w-auto px-1'>Profile</legend>
          <FormGroup>
            <Label className='text-primary' for='company'>
              Company
						</Label>
            <Input
              type='text'
              id='company'
              name='company'
              value={form.company}
              onChange={e => props.formProfile({ company: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label className='text-primary' for='position'>
              Position
						</Label>
            <Input
              type='text'
              id='position'
              name='position'
              value={form.position}
              onChange={e => props.formProfile({ position: e.target.value })}
            />
          </FormGroup>
        </fieldset>

        <fieldset className='border border-secondary p-2'>
          <legend className='w-auto px-1'>Address</legend>
          <FormGroup>
            <Label className='text-primary' for='phone'>
              Phone
						</Label>
            <Input
              type='tel'
              id='phone'
              name='phone'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              value={form.address.phone}
              onChange={e => props.formAddress({ phone: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label className='text-primary' for='fax'>
              Fax
						</Label>
            <Input
              type='tel'
              id='fax'
              name='fax'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              value={form.address.fax}
              onChange={e => props.formAddress({ fax: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label className='text-primary' for='street'>
              Address
						</Label>
            <Input
              type='text'
              id='street'
              name='street'
              value={form.address.street}
              onChange={e => props.formAddress({ street: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label className='text-primary' for='city'>
              City
						</Label>
            <Input
              type='text'
              id='city'
              name='city'
              value={form.address.city}
              onChange={e => props.formAddress({ city: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label className='text-primary' for='state'>
              State
						</Label>
            <Input
              type='text'
              id='state'
              name='state'
              value={form.address.state}
              onChange={e => props.formAddress({ state: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label className='text-primary' for='zip'>
              Zip Code
						</Label>
            <Input
              type='text'
              id='zip'
              name='zip'
              value={form.address.zip}
              onChange={e => props.formAddress({ zip: e.target.value })}
            />
          </FormGroup>
        </fieldset>
      </Form>
      <Card className='bg-dark text-light mt-3'>
        <CardHeader className='bg-black'>Actions</CardHeader>
        <CardBody>
          <Row className='px-3'>
            <Button className='mr-1' color='success' onClick={handleSave}>
              Save
						</Button>
            <Link to='/users'>
              <Button color='primary'>Cancel</Button>
            </Link>
            {id && (
              <Button
                color={form.user.is_deleted ? 'info' : 'danger'}
                className='ml-auto'
                onClick={handleDelete}
              >
                {form.user.is_deleted ? 'Reactivate' : 'Delete'}
              </Button>
            )}
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

UserForm.propTypes = {
  users: PropTypes.shape({
    form: PropTypes.object.isRequired,
  }),
  getProfile: PropTypes.func,
  clear: PropTypes.func,
  updateProfile: PropTypes.func,
  setAlert: PropTypes.func,
  createProfile: PropTypes.func,
  formUser: PropTypes.func,
  formProfile: PropTypes.func,
  formAddress: PropTypes.func,
};

export default UserForm;
