import React, { useState, useEffect } from 'react';
import axios from 'axios'

//component imports
import ProjectCard from './ProjectCard/ProjectCard'

//bootstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const ProjectsContainer = () => {
   const [ projects, setProjects ] = useState([])

   useEffect(() => {
      axios.get('http://localhost:5000/api/projects/')
      .then(res => setProjects(res.data))
   }, [])

   return (
      <Container>
         <h1>Let's Look at Some projects</h1>
         <Row className="justify-content-between ">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
         </Row>
      </Container>
   );
};

export default ProjectsContainer;