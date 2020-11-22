import React, { useState, useEffect } from "react";
import axios from "axios";

//component imports
import ProjectCard from "./ProjectCard/ProjectCard";
import PageLoading from "../PageLoading/PageLoading"

//bootstrap imports
import { Container, Row, Spinner } from "react-bootstrap";

const ProjectsContainer = () => {
	const [projects, setProjects] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/projects/")
			.then((res) => setProjects(res.data.projects));
	}, []);

	return (
		<Container>
			<h1 style={{ textAlign: "center" }}>Let's Look at Some projects</h1>
			{!projects && <PageLoading/>}
			<Row className="justify-content-around">
				{projects &&
					projects.map((project) => <ProjectCard project={project} />)}
			</Row>
		</Container>
	);
};

export default ProjectsContainer;
