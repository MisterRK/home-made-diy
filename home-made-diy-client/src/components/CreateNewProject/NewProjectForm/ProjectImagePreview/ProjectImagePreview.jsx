import React from 'react';

//bootstrap imports
import Image from 'react-bootstrap/Image'

const ProjectImagePreview = (props) => {
   return (
      <>
         {props.image !== null? <Image src={props.image} /> : null}
      </>
   );
};

export default ProjectImagePreview;