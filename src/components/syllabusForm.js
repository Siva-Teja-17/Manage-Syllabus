import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import SyllabusHandle from "./syllabusHandle";

const SyllabusForm = (props) => {
    const { index, syllabusItem, closeForm, saveData } = props;
    const [title, setTitle] = useState(syllabusItem.title || "");
    const [description, setDescription] = useState(syllabusItem.description || "");
    const [objectives, setObjectives] = useState(syllabusItem.objectives || "");

    const handleChange = () => {
        const updatedSyllabus = ({ title: title, description: description, objectives: objectives, editMode: false , cancelMode: true});
        saveData(index, updatedSyllabus);
    }
    return (
        <div>
        <Form>
            <Form.Group as={Row} className='mb-2'>
                <Col></Col>
                <Col xs={1}>
                    <Form.Label>Title</Form.Label>
                </Col>
                <Col xs={5}>
                    <Form.Control type='text' placeholder='Enter syllabus title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </Col>
                <Col></Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-2'>
                <Col></Col>
                <Col xs={1}>
                    <Form.Label>Description</Form.Label>
                </Col>
                <Col xs={5}>
                    <Form.Control as='textarea' rows={3} type='text' placeholder='Enter syllabus description' value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </Col>
                <Col></Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-2'>
                <Col></Col>
                <Col xs={1}>
                    <Form.Label>Outcomes</Form.Label>
                </Col>
                <Col xs={5}>
                    <Form.Control type='text' placeholder='Learning outcomes' value={objectives} onChange={(e) => { setObjectives(e.target.value) }} />
                </Col>
                <Col></Col>
            </Form.Group>
            <Button variant='primary' onClick={handleChange} type='button'>Save</Button>{' '}
            <Button variant='secondary' onClick={closeForm}>Cancel</Button>
        </Form>
        </div>
    );
}

export default SyllabusForm;