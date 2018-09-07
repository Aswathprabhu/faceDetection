import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import FaceDetectionForm from './components/FaceDetectionForm/FaceDetectionForm';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 900
      }
    },

  }

}
let tempBox=[];
const app = new Clarifai.App({
  apiKey: '0a8cdfa4d197418c9fbdce913d6bb70a'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      boxes: []
    }
  }
  calculateBoxSize = (data) => {
    
    const image=document.getElementById("image");
    const height=image.height;
    const width=image.width;
    tempBox.push({
      top: Number(data.top_row*height),
      bottom: Number(height-data.bottom_row*height),
      left: Number(data.left_col*width),
      right: Number(width-data.right_col*width)
    });
    this.setState({boxes:tempBox});
   
    return (this.state.boxes);
  }
  OnInputChange = (event) => {
    this.setState({ input: event.target.value });
  }
  OnButtonSubmit = () => {
    this.setState({ imageURL: this.state.input });
    app.models.predict('a403429f2ddf4b49b307e318f00e528b', this.state.input).then((response)=>{
    
      let bounding_model=response.outputs[0].data.regions;
      bounding_model.forEach((response)=>{
        this.calculateBoxSize(response.region_info.bounding_box);
      });
        
      }).catch((err)=> {
        console.error(err);
      }
    );
  }
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <FaceDetectionForm OnInputChange={this.OnInputChange} OnButtonSubmit={this.OnButtonSubmit} />
        <ImageLinkForm boxes={this.state.boxes} imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
