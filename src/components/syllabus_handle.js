import React, { useState } from 'react';
import { Button, Form, Container, Row, Col} from 'react-bootstrap';
import SyllabusCards from './syllabus_cards';

const SyllabusHandle = () => {
  const [formOpenStatus, setFormOpen] = useState(false);
  const [cards, setSyllabusCards] = useState([]);
  const [syllabusTitle, setTitle] = useState("");
  const [syllabusDescription, setDescription] = useState("");
  const [syllabusOutcomes, setOutcomes] = useState("Algorithms, Syntax, Functions, Programming");

  const openForm = () => {
    setFormOpen(true);
  };

  const saveData = () => {
    const newCard = {title : syllabusTitle, description : syllabusDescription, outcomes: syllabusOutcomes};
    setSyllabusCards([...cards, newCard]);
    setFormOpen(false);
    setTitle("");
    setDescription("");
    setOutcomes("Algorithms, Syntax, Functions, Programming");
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <div>
      Add Syllabus
      <Button variant='primary' onClick={openForm}> + </Button>
      {formOpenStatus && (
        <Container>
          <Form>
            <Form.Group as={Row} className='mb-2'>
              <Col></Col>
              <Col xs={1}>
                <Form.Label>Title</Form.Label>
              </Col>
              <Col xs={5}>
                <Form.Control type='text' placeholder='Enter syllabus title' onChange={(e) => setTitle(e.target.value)} />
              </Col>
              <Col></Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-2'>
              <Col></Col>
              <Col xs={1}>
                <Form.Label>Description</Form.Label>
              </Col>
              <Col xs={5}>
                <Form.Control as='textarea' rows={3} type='text' placeholder='Enter syllabus description'  onChange={(e) => setDescription(e.target.value)} />
              </Col>
              <Col></Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-2'>
              <Col></Col>
              <Col xs={1}>
                <Form.Label>Outcomes</Form.Label>
              </Col>
              <Col xs={5}>
                <Form.Control type='text' placeholder='Algorithms, Syntax, Functions, Programming' onChange={(e) => setOutcomes(e.target.value)} />
              </Col>
              <Col></Col>
            </Form.Group>
            <Button variant='primary' onClick={saveData} type='submit'>Save</Button>{' '}
            <Button variant='secondary' onClick={closeForm}>Cancel</Button>
          </Form>
        </Container>
      )}
      {cards.map((syllabusCard, index) => (
        <SyllabusCards key = {index} title = {syllabusCard.title} description = {syllabusCard.description} outcomes = {syllabusCard.outcomes} />
      ))}
    </div>
  );
};

export default SyllabusHandle;