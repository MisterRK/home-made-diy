import Axios from "axios";
import React, { useState, useEffect } from "react";
import axios from "axios";

//bootstrap imports
import {Container} from 'react-bootstrap'

//component imports
import PageLoading from "../PageLoading/PageLoading";
import StepDetail from './StepDetail/StepDetail'

const ProjectDetail = (props) => {

	const [project, setProject] = useState(null);

	useEffect(() => {
		const id = props.match.params.id;
		axios
			.get(`http://localhost:5000/api/projects/${id}`)
         .then((res) => setProject(res.data.project))
         .then()
         .catch(err => console.log(err))
   }, [props.match.params.id]);

   let imageSrcString;
   if(project){imageSrcString=`data:${project.imageType};base64,${project.imageData}`}

	console.log(project);
	return (
		<Container>
			{!project && <PageLoading />}
			{project && (
				<>
               <img 
               style={{maxHeight: "500px"}}
               src={imageSrcString} alt={project.title}></img>
					<h1>{project.title}</h1>
					<h6>{project.description}</h6>
               {project.Steps.map(step => <StepDetail {...step}/>)}
				</>
			)}
		</Container>
	);
};

export default ProjectDetail;
