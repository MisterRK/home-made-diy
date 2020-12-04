import React, {useState, useEffect} from 'react';
import axios from 'axios'

const ProjectCreationInterface = (props) => {
   const [project, setProject] = useState(null);
   const [step, setStep] = useState({
      heading: "",
      content: "",
      stepImage: "",
      order: 1
   })

   useEffect(() => {
		const id = props.match.params.id;
		axios
			.get(`http://localhost:5000/api/projects/${id}`)
			.then((res) => setProject(res.data.project));
   }, [props.match.params.id]);
   
   const handleChange = (e) => {
		if (e.target.name === "stepImage") {
			try {
				setStep({
					...step,
					stepImage: URL.createObjectURL(e.target.files[0]),
				});
			} catch (error) {
				console.log(error);
			}
		} else {
			setStep({
				...step,
				[e.target.name]: e.target.value,
			});
		}
	};
   return (
      <div>
         
      </div>
   );
};

export default ProjectCreationInterface;