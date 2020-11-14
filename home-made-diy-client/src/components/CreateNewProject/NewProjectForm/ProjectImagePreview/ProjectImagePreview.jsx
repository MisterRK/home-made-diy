import React from 'react';

//bootstrap imports
import Image from 'react-bootstrap/Image'

const ProjectImagePreview = (props) => {
   console.log("projectImagePreview=>", props)
   return (
      <>
         {props.image !== undefined? <Image src={props.image} /> : null}
      </>
   );
};

export default ProjectImagePreview;