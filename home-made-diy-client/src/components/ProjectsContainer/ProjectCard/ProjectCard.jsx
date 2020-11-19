import React, { useState } from "react";

//bootstrap imports
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Heart, HeartFill } from "react-bootstrap-icons";

const ProjectCard = (props) => {
	const [liked, setLiked] = useState(false);
	console.log(props);

	const { title, description, imageData, imageType } = props.project;

	const imageSrcString = `data:${imageType};base64,${imageData}`;

	return (
		<Card style={{ width: "18rem", marginTop: "8%" }}>
			<Card.Img variant="top" src={imageSrcString} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
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

export default ProjectCard;
