import React, {useState, useEffect} from 'react';
import axios from 'axios'

import {Form, Button} from 'react-bootstrap'
import ProjectImagePreview from '../CreateNewProject/NewProjectForm/ProjectImagePreview/ProjectImagePreview'

const ProjectCreationInterface = (props) => {
   const [project, setProject] = useState(null);

   const [step, setStep] = useState({
      heading: "",
      content: "",
      stepImage: "",
      order: 1
   })

   useEffect(() => {
		const id = props.match.params.id;
		axios
			.get(`http://localhost:5000/api/projects/${id}`)
			.then((res) => setProject(res.data.project));
   }, [props.match.params.id]);
   
   const handleChange = (e) => {
		if (e.target.name === "stepImage") {
			try {
				setStep({
					...step,
					stepImage: URL.createObjectURL(e.target.files[0]),
				});
			} catch (error) {
				console.log(error);
			}
		} else {
			setStep({
				...step,
				[e.target.name]: e.target.value,
			});
		}
	};
   return (
      <Form encType="multipart/form-data">
						<Form.Group controlId="formGroupStepTitle">
							<Form.Label>Add a heading to your step:</Form.Label>
							<Form.Control
								type="text"
								placeholder="Tell me what we're going to do in this step"
								value={step.heading}
								name="heading"
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group controlId="formGroupStepContent">
							<Form.Label>Details for step 1: </Form.Label>
							<Form.Control
								as="textarea"
								rows="10"
								value={step.content}
								name="content"
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>
								Add a photo to go along with this step
							</Form.Label>
							<Form.File name="stepImage" onChange={handleChange} />
							{step.stepImage !== "" ? (
								<ProjectImagePreview image={step.stepImage} />
							) : null}
						</Form.Group>
						<Button>Add Another Step</Button>
						<Button>Publish Project</Button>
					</Form>
   );
};

export default ProjectCreationInterface;