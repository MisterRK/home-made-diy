import React, { useState } from "react";
import { withRouter } from "react-router";


//bootstrap imports
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Heart, HeartFill } from "react-bootstrap-icons";

const ProjectCard = (props) => {

	const [liked, setLiked] = useState(false);

	const { id, title, description, imageData, imageType } = props.project;

	const imageSrcString = `data:${imageType};base64,${imageData}`;
	let shortDescription;
	if (description && description.length >= 240) {
		shortDescription = description.slice(0, 240) + "...";
	} else {
		shortDescription = description;
	}

	const showProject = () => {
		console.log("let's check this project out");
		props.history.push(`/projects/${id}`)
	};

	console.log(props)
	return (
		<Card style={{ width: "18rem", marginTop: "8%" }}>
			<Card.Img
				style={{ cursor: "pointer" }}
				onClick={showProject}
				variant="top"
				src={imageSrcString}
				height="300px"
			/>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{shortDescription}</Card.Text>
				<Button
					variant="white"
					onClick={() => {
						setLiked(true);
					}}
				>
					{liked ? <HeartFill color="red" /> : <Heart color="red" />}
				</Button>
			</Card.Body>
		</Card>
	);
};

export default withRouter(ProjectCard);
