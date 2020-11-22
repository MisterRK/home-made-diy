import React from 'react';

//bootstrap imports
import { Spinner } from 'react-bootstrap'

const PageLoading = () => {
   return (
      <div
      style={{
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         padding: "25%",
      }}
   >
      <Spinner
         style={{
            height: "250px",
            width: "250px",
         }}
         animation="border"
      >
         <span className="sr-only">Loading...</span>
      </Spinner>
   </div>
   );
};

export default PageLoading;