import React from "react";
import { Route, Switch } from "react-router-dom";

//component imports
import Header from "./components/Header/Header";
import ProjectsContainer from "./components/ProjectsContainer/ProjectsContainer";
import AddStepForm from "./components/AddStepForm/AddStepForm";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import ProjectCreationInterface from "./components/ProjectCreationInterface/ProjectCreationInterface";
import NewProjectForm from "./components/NewProjectForm/NewProjectForm";

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route
						exact
						path="/create-new-project"
						component={NewProjectForm}
					/>
					<Route exact path="/:id/add-step-1" component={AddStepForm} />
					<Route
						exact
						path="/:id/add-steps"
						component={ProjectCreationInterface}
					/>
					<Route exact path="/projects/:id" component={ProjectDetail} />
					<Route exact path="/" component={ProjectsContainer} />
				</Switch>
			</div>
		);
	}
}

export default App;

// `data:image/jpeg;base64,${data}`
