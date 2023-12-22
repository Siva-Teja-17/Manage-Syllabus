import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import SyllabusForm from "./syllabusForm";
import SyllabusCards from "./syllabusCards";

const SyllabusHandle = () => {
  const [syllabusData, setSyllabusData] = useState([]);

  const openForm = () => {
    const cloneSyllabusData = [...syllabusData];
    cloneSyllabusData.push({ title: "", description: "", objectives: "", editMode: true });
    setSyllabusData(cloneSyllabusData);
  }

  const editForm = () => {
    
  }

  const closeForm = () => {
    const cloneSyllabusData = syllabusData.map((item) => ({...item, editMode: false}));
    setSyllabusData(cloneSyllabusData);
  }

  const saveData = (index, updatedSyllabus) => {
    const cloneSyllabusData = [...syllabusData];
    cloneSyllabusData[index] = updatedSyllabus;
    setSyllabusData(cloneSyllabusData);
  }

  const deleteData = (index) => {
    const cloneSyllabusData = [...syllabusData];
    cloneSyllabusData.splice(index, 1);
    setSyllabusData(cloneSyllabusData);
  }

  return (
    <div>
      Add Syllabus{" "}
      <Button variant='primary' onClick={openForm}> + </Button>
      {syllabusData.map((syllabusItem, index) => {
        console.log("syllabusItem",syllabusItem);
        return (syllabusItem.editMode ?
          (<SyllabusForm key={index} index={index} syllabusItem={syllabusItem} closeForm={closeForm} saveData={saveData} />) :
          (<SyllabusCards key={index} index={index} syllabusItem={syllabusItem} openForm={openForm} deleteData={deleteData} />)
        )
      })}
    </div>
  );
}

export default SyllabusHandle;