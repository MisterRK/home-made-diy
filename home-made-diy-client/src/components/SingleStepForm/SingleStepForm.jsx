import ProjectImagePreview from '../CreateNewProject/NewProjectForm/ProjectImagePreview/ProjectImagePreview'

import React, {useState} from 'react';

import {Form, Button} from 'react-bootstrap'

const SingleStepForm = (props) => {
   const [step, setStep] = useState("")
   
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

export default SingleStepForm;