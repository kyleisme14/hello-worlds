import React, { Component } from 'react'
import './App.css';

// Components
import Cover from './Cover';
import Login from './Login';
import Forum from './Forum';
import Contact from './Contact';
import InstaAlbum from './InstaAlbum';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Contact /> */}
        <Forum />
        {/* <Racing />
        <Basketball /> */}
        {/* <InstaAlbum /> */}
        {/* <Cover /> */}
        {/* <Login /> */}
      </div>
    )
  }
}

export default App;
