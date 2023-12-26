import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';

const SyllabusCards = (props) => {
  const {index, syllabusItem, editForm, deleteData } = props; 
  return (
    <Card key = {index} className="my-2" style={{ width: '30rem' }}>
      <Card.Header as="h5" style={{ textAlign: 'left' }}>
        <Badge bg="info">{index + 1}</Badge> {syllabusItem.title}
      </Card.Header>
      <Card.Body>
        <Card.Text style={{ textAlign: 'left' }}>{syllabusItem.description}</Card.Text>
        <Card.Text style={{ textAlign: 'left' }}>{syllabusItem.objectives}</Card.Text>
        <Button variant="primary" onClick={editForm}>Edit</Button>{' '}
        <Button variant="danger" onClick={deleteData}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default SyllabusCards;