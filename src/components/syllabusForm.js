import React, { useState } from "react";
import { Button, Form, Row, Col, Badge } from "react-bootstrap";
import SyllabusHandle from "./syllabusHandle";

const SyllabusForm = (props) => {
  const { index, syllabusItem, closeForm, saveData } = props;
  const [title, setTitle] = useState(syllabusItem.title || "");
  const [description, setDescription] = useState(
    syllabusItem.description || ""
  );
  const [objectives, setObjectives] = useState(syllabusItem.objectives || []);
  const [objective, setObjective] = useState("");

  const handleChange = () => {
    const updatedSyllabus = {
      title: title,
      description: description,
      objectives: objectives,
      editMode: false,
      cancelMode: true,
    };
    saveData(index, updatedSyllabus);
  };

  const addObjective = () => {
    setObjectives([...objectives, objective]);
    setObjective("");
  };

  const deleteObjective = (index) => {
    const cloneObjectives = [...objectives];
    cloneObjectives.splice(index, 1);
    setObjectives(cloneObjectives);
  };

  return (
    <div>
      <Form>
        <Form.Group as={Row} className="mb-2">
          <Col></Col>
          <Col xs={1}>
            <Form.Label>Title</Form.Label>
          </Col>
          <Col xs={5}>
            <Form.Control
              type="text"
              placeholder="Enter syllabus title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Col>
          <Col></Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
          <Col></Col>
          <Col xs={1}>
            <Form.Label>Description</Form.Label>
          </Col>
          <Col xs={5}>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              placeholder="Enter syllabus description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Col>
          <Col></Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-2">
          <Col></Col>
          <Col xs={1}>
            <Form.Label>Outcomes</Form.Label>
          </Col>
          <Col xs={5}>
            <Form.Control
              type="text"
              placeholder="Learning outcomes"
              value={objective}
              onChange={(e) => {
                setObjective(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addObjective();
                }
              }}
            />
            {objectives.map((outcome, index) => (
              <Button key={index} variant="success" onClick={() => deleteObjective(index)}>
                {outcome}
                <Badge bg="secondary">X</Badge>
              </Button>
            ))}
          </Col>
          <Col></Col>
        </Form.Group>
        <Button variant="primary" onClick={handleChange}>
          Save
        </Button>{" "}
        <Button variant="secondary" onClick={closeForm}>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default SyllabusForm;