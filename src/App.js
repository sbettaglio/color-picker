import React, { Component } from 'react'

export class App extends Component {
  state = {
    h: 180,
    s: 50,
    l: 50,
  }

  adjustHueSlider = e => {
    console.log(e.target.value)
    this.setState({
      h: e.target.value,
    })
  }

  adjustSaturationSlider = e => {
    console.log(e.target.value)
    this.setState({
      s: e.target.value,
    })
  }

  adjustLightSlider = e => {
    console.log(e.target.value)
    this.setState({
      l: e.target.value,
    })
  }
  render() {
    return (
      <>
        <h1>HSL Color Picker</h1>
        <section className="color-container">
          <aside
            className="color-display"
            style={{
              backgroundColor: `hsl(${this.state.h}, ${this.state.s}%, ${this.state.l}%)`,
            }}
          ></aside>
          <form>
            <div>
              <p>Hue</p>
              <input
                type="range"
                className={'hue'}
                min="0"
                max="360"
                onChange={this.adjustHueSlider}
                value={this.state.hue}
              ></input>
            </div>
            <div>
              <p>Saturation</p>
              <input
                type="range"
                className={'saturation'}
                min="0"
                max="100"
                onChange={this.adjustSaturationSlider}
                value={this.state.s}
              ></input>
            </div>
            <div>
              <p>Light</p>
              <input
                type="range"
                className="light"
                min="0"
                max="100"
                onChange={this.adjustLightSlider}
                value={this.state.l}
              ></input>
            </div>
          </form>
        </section>
      </>
    )
  }
}

export default App
