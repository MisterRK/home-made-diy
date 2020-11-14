import React from 'react';

import NewProjectForm from './NewProjectForm/NewProjectForm'

//bootstrap imports
import Container from 'react-bootstrap/Container'

const CreateNewProject = () => {
   return (
      <Container>
         <h1>On the Create New Project Page</h1>
         <NewProjectForm />
      </Container>
   );
};

export default CreateNewProject;