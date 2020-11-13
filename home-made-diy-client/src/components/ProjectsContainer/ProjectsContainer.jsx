import React from 'react';

//component imports
import ProjectCard from './ProjectCard/ProjectCard'

//bootstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const ProjectsContainer = () => {
   return (
      <Container>
         <h1>Let's Look at Some projects</h1>
         <Row className="justify-content-between">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
         </Row>
      </Container>
   );
};

export default ProjectsContainer;