import React from "react";

//bootstrap imports
import Image from "react-bootstrap/Image";

const ProjectImagePreview = (props) => {
	return (
		<>
			<Image src={props.image} rounded height="300px" />
		</>
	);
};
export default ProjectImagePreview;
