import React from 'react'
import './App.css';

//component imports
import Header from './components/Header/Header'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;

// `data:image/jpeg;base64,${data}`