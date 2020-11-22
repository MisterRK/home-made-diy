import React, {useState, useEffect} from 'react';

//components
import PageLoading from '../PageLoading/PageLoading'

//bootstrap imports
import { Form } from 'react-bootstrap'

const AddStepForm = () => {
   const [project, setProject] = useState(null)

   useEffect(() => {
      
   }, [])
   return (
      <div>
         {!project && <PageLoading/>}
         {project && (
            <Form>
               <Form.Label></Form.Label>
            </Form>
         )}
      </div>
   );
};

export default AddStepForm;