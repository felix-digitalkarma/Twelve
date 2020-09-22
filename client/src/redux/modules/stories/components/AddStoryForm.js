import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const AddStoryForm = (props) => {
  const { addStory } = props;
  const [formData, setFormData] = useState({ title: '', body: '' });

  const { title, body } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    addStory(formData);

  }
  return (
    <Container>
      <Row><Col>
        <h1>Add Story Form</h1>
        <Container>
          <form onSubmit={onSubmit}>
            <div className="form-row">
              <div className='form-group'>
                <label htmlFor='title'>Title</label>
                <input
                  type='text'
                  name='title'
                  className='form-control'
                  placeholder='Your title...'
                  id='title'
                  value={title}
                  onChange={onChange}
                  required
                />
                <div className='invalid-feedback'>Valid title is required.</div>
              </div>
            </div>
            <div className="form-row">
              <div className='form-group'>
                <label htmlFor='body'>Body</label>
                <input
                  type='text'
                  name='body'
                  className='form-control'
                  placeholder='Your story...'
                  id='body'
                  value={body}
                  onChange={onChange}
                  required
                />
                <div className='invalid-feedback'>Body is required</div>
              </div>
            </div>

            <div>
              <input type='submit' name='btn' className='btn btn-primary' value='Add Story' />
            </div>
          </form>
        </Container>
      </Col>
      </Row>

    </Container>
  )
}

export default AddStoryForm
