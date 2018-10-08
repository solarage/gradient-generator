import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      colorFrom: "#ff22cc",
      colorTo: "#ffee33"
    }
  }

  changeBgColor = (event) => {
    event.preventDefault();

    let newColorFrom = this.validateHexCode(this.refColorFrom.value.trim()) 
      ? this.refColorFrom.value
      : this.state.colorFrom;
    let newColorTo = this.validateHexCode(this.refColorTo.value.trim()) 
      ? this.refColorTo.value
      : this.state.colorTo;

    this.setState({
      colorFrom: newColorFrom,
      colorTo: newColorTo
    })
  }

  validateHexCode = (code) => {
    let regex = new RegExp(/^#[0-9A-Fa-f]{6}$/);
    if(!regex.test(code)) return false;
    return code;
  }

  render() {
    const gradient = `linear-gradient(${this.state.colorFrom}, ${this.state.colorTo})`;
    const bgStyle = {
      backgroundImage: gradient,
    }
    const borderStyle = {
      border: `5px solid transparent`,
      borderImageSource: gradient,
      borderImageSlice: 1,
      borderImageWidth: 1
    }
    
    return (
      <div className="App" style={bgStyle}>
        <header className="App-header">
          <form id="bg-page" className="bg-page" onSubmit={this.changeBgColor}>
            <label><span>FROM</span><input type="text" placeholder="#FF22CC" name="colorFrom" required ref={(colorFrom) => this.refColorFrom = colorFrom}></input></label>
            <label><span>TO</span><input type="text" placeholder="#FFEE33" name="colorTo" required ref={(colorTo) => this.refColorTo= colorTo}></input></label>
            <button type="submit" className="btn-bg-page" style={borderStyle}>GO</button>
          </form>
        </header>
        <main> 
          <div className="gradient"></div>
        </main>
      </div>
    );
  }
}

export default App;

