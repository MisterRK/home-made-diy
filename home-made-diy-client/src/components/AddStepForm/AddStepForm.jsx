import React, { useState, useEffect } from "react";
import axios from "axios";

//components
import PageLoading from "../PageLoading/PageLoading";

//bootstrap imports
import { Form, Container } from "react-bootstrap";

const AddStepForm = (props) => {
	const [project, setProject] = useState(null);
	const [step, setStep] = useState({ heading: "", content: "" });
	console.log(props);

	useEffect(() => {
		const id = props.match.params.id;
		axios
			.get(`http://localhost:5000/api/projects/${id}`)
			.then((res) => setProject(res.data.project));
	}, [props.match.params.id]);

	const handleChange = (e) => {
		setStep({
			...step,
			[e.target.name]: e.target.value,
		});
	};

	console.log(step);
	return (
		<div>
			{!project && <PageLoading />}
			{project && (
				<Container>
					<h1>
						Adding Step 1 for <em>{project.title}</em>
					</h1>
					<h4>{project.description}</h4>
					<Form>
						<Form.Group>
							<Form.Label>Add a heading to your step:</Form.Label>
							<Form.Control
								placeholder=""
                        value={step.heading}
                        name="heading"
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Details for step 1: </Form.Label>
							<Form.Control
								placeholder=""
                        value={step.content}
                        name="content"
								onChange={handleChange}
							/>
						</Form.Group>
                  
					</Form>
				</Container>
			)}
		</div>
	);
};

export default AddStepForm;
