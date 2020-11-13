import React, { useState } from "react";

//bootstrap imports
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Heart, HeartFill } from "react-bootstrap-icons";

const ProjectCard = () => {
	const [liked, setLiked] = useState(false);
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="https://via.placeholder.com/180x150" />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up
					the bulk of the card's content.
				</Card.Text>
				<Button variant="white" onClick={() => {setLiked(true)}}>
					{liked ? (
						<HeartFill color="red" />
					) : (
						<Heart color="red" />
					)}
				</Button>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
