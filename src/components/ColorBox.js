import React, { Component } from 'react'

export class ColorBox extends Component {
  state = {
    h: 50,
    s: 50,
    l: 50,
  }
  hueSliderTracker = e => {
    this.setState({
      hue: e.target.value,
    })
  }
  adjustHueSlider = () => {
    this.setState({
      h: this.state.hue,
    })
  }
  saturationSliderTracker = e => {
    this.setState({
      saturation: e.target.value,
    })
  }
  adjustSaturationSlider = () => {
    this.setState({
      h: this.state.saturation,
    })
  }
  lightSliderTracker = e => {
    this.setState({
      light: e.target.value,
    })
  }
  adjustLightSlider = () => {
    this.setState({
      h: this.state.light,
    })
  }

  render() {
    return (
      <>
        <aside
          className="color-display"
          style={`backgroundColor: hsl(${this.state.h},${this.state.l},${this.state.s})`}
        ></aside>
        <form className="color-box">
          <div>
            <p>Hue</p>
            <input
              type="range"
              className="hue slider"
              name="hue"
              min="0"
              max="360"
              action="mouseup"
            ></input>
          </div>
          <div>
            <p>Saturation</p>
            <input
              type="range"
              className="saturation slider"
              name="saturation"
              min="0"
              max="100"
            ></input>
          </div>
          <div>
            <p>Light</p>
            <input
              type="range"
              className="light slider"
              min="0"
              max="100"
            ></input>
          </div>
        </form>
      </>
    )
  }
}

export default ColorBox
