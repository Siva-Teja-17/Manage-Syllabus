import { TextareaAutosize } from '@mui/material';
import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const SyllabusHandle = () => {
  const [formOpenStatus, setFormOpen] = useState(false);

  const openForm = () => {
    setFormOpen(true);
  };

  const saveData = ()=> {
    
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <div>
      Add new Syllabus
      <Button variant='primary' onClick={openForm}> + </Button>
      {formOpenStatus && (
        <Form>
          <Form.Group as={Row} className='mb-2'>
            <Col></Col>
            <Col xs={1}>
              <Form.Label>Title</Form.Label>
            </Col>
            <Col xs={5}>
              <Form.Control type='text' placeholder='Enter syllabus title' />
            </Col>
            <Col></Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-2'>
            <Col></Col>
            <Col xs={1}>
              <Form.Label>Description</Form.Label>
            </Col>
            <Col xs={5}>
              <Form.Control as='textarea' rows={3} type='text' placeholder='Enter syllabus description' />
            </Col>
            <Col></Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-2'>
            <Col></Col>
            <Col xs={1}>
              <Form.Label>Outcomes</Form.Label>
            </Col>
            <Col xs={5}>
              <Form.Control placeholder="Algorithms, Syntax, Functions, Programming" disabled />
            </Col>
            <Col></Col>
          </Form.Group>
          <Button variant='primary' type='submit'>Save</Button>{' '}
          <Button variant='secondary' onClick={closeForm}>Cancel</Button>
        </Form>
      )}
    </div>
  );
};

export default SyllabusHandle;