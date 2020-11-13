import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';

//component imports
import Header from './components/Header/Header'
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={ProjectsContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;

// `data:image/jpeg;base64,${data}`