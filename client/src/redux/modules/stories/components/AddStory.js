import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const initialState = { title: '', body: '' };

const AddStoryForm = (props) => {

  const { addStory, hideModal } = props;
  const [formData, setFormData] = useState(initialState);

  const { title, body } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    addStory(formData);
    setFormData(initialState);
    props.getStories();
  }
  return (
    <Container>
      <Row>
        <Col>
          <Container className="p-3">
            <form onSubmit={onSubmit}>
              <div className="form">
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
                <div className='form-group'>
                  <label htmlFor='body'>Body</label>
                  <textarea
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
              <div className="row p-3">
                <input type='submit' name='btn' className='btn btn-primary' value='Add Story' />
                <button className="btn btn-success ml-20" onClick={hideModal}>Done</button>
              </div>

            </form>

          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default AddStoryForm
