import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import FaceDetectionForm from './components/FaceDetectionForm/FaceDetectionForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particleOptions={
  particles: {
                  number:{
                      value:20,
                      density:{
                        enable:true,
                        value_area:900
                      }
                    },

             }
             
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className="particles" params={particleOptions}/>
      <Navigation />
      <Logo/>
      <Rank />
      <FaceDetectionForm />
      </div>
    );
  }
}

export default App;
