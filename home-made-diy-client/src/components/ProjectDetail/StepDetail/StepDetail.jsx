import React from 'react';

//bootstrap imports
import {Row, Col} from 'react-bootstrap'

const StepDetail = (props) => {

   console.log(props)
   return (
      <Row>
         <Col><div>something</div></Col>
         <Col><div>Something</div></Col>
      </Row>
   );
};

export default StepDetail;