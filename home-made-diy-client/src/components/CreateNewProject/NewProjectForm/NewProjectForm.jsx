import React, { useState } from 'react';

import ProjectImagePreview from './ProjectImagePreview/ProjectImagePreview'


//bootstrap imports
import Form from 'react-bootstrap/Form'

const NewProjectForm = () => {
   const [ projectInfo, setProjectInfo ] = useState({
      projectTitle: "",
      projectDescription: "",
      projectImage: null
   })

   const handleChange = (e) =>{
      if(e.target.name === 'projectImage'){
            setProjectInfo({
               ...projectInfo,
               projectImage: URL.createObjectURL(e.target.files[0])
            })
      }else {
         setProjectInfo({
            ...projectInfo,
            [e.target.name]: e.target.value
         })
      }
   }
   console.log(projectInfo)

   return ( 
      <Form>
         <h2>Get Started with the Basics</h2>
         <Form.Group controlId="formGroupProjectTitle">
            <Form.Label>Project Title:</Form.Label>
            <Form.Control 
               name="projectTitle" 
               type="text"
               value={projectInfo.projectTitle}
               placeholder="Project Title" />
         </Form.Group>
         <Form.Group controlId="formGroupProjectDescription">
            <Form.Label>Project Description:</Form.Label>
            <Form.Control 
               name="projectDescription" 
               as='textarea'
               value={projectInfo.projectDescription} 
               rows={5} 
               placeholder="Project Description" />
         </Form.Group>
         <Form.Group>
            <Form.Label>Add a Cover Photo for your Project</Form.Label>
            <Form.File 
               name="projectImage"
               onChange={handleChange}/>
            <ProjectImagePreview image={projectInfo.projectImage} />
         </Form.Group>
      </Form>
   );
};

export default NewProjectForm;