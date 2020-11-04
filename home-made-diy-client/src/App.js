import React from 'react'
import './App.css';
import axios from 'axios'

class App extends React.Component {
  state = {
    project: null
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/projects')
      .then(res => this.setState({project: res.data.projects[0]}))
      .catch(err => console.log(err.message))
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <h1>Whats up</h1>
        <img src={`data:image/png;base64,${this.state.img}`}></img>
      </div>
    );
  }
}

export default App;

// `data:image/jpeg;base64,${data}`