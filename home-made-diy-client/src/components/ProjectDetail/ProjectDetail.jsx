import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import axios from 'axios'

//component imports
import PageLoading from '../PageLoading/PageLoading'

const ProjectDetail = (props) => {
   const [project, setProject] = useState(null)

   useEffect(() => {
		const id = props.match.params.id;
		axios
			.get(`http://localhost:5000/api/projects/${id}`)
			.then((res) => setProject(res.data.project));
	}, [props.match.params.id]);
   return (
      <div>
         <h1>This is the project detail page</h1>
         
      </div>
   );
};

export default ProjectDetail;