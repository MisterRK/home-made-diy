import React from 'react'
import './App.css';
import axios from 'axios'

class App extends React.Component {
  state = {
    img: null
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/files/1')
      .then(res => this.setState({img: res.data.imgString}))
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