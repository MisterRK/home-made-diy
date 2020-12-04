import React from 'react';

import NewProjectForm from './NewProjectForm/NewProjectForm'

//bootstrap imports
import Container from 'react-bootstrap/Container'

const CreateNewProject = () => {
   return (
      <Container>
         <NewProjectForm />
      </Container>
   );
};

export default CreateNewProject;