import React from "react";
import { Card, Button } from "react-bootstrap";

const SyllabusCards = ({title, description, outcomes}) => {
    
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{outcomes}</Card.Text>
                <Button variant="primary">Edit</Button>{' '}
                <Button variant="danger">Delete</Button>
            </Card.Body>
        </Card>
    );
};

export default SyllabusCards;