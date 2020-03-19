import React, { Component } from 'react'

export class App extends Component {
  state = {
    h: Math.round(Math.random() * 360),
    s: Math.round(Math.random() * 100),
    l: Math.round(Math.random() * 100),
  }
  randomColor = () => {
    this.setState({
      h: Math.round(Math.random() * 360),
      s: Math.round(Math.random() * 360),
      l: Math.round(Math.random() * 100),
    })
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
          <article>
            <aside
              className="color-display"
              style={{
                backgroundColor: `hsl(${this.state.h}, ${this.state.s}%, ${this.state.l}%)`,
              }}
            ></aside>
            <h5>{`hsl(${this.state.h}, ${this.state.s}%, ${this.state.l}%)`}</h5>
          </article>
          <form>
            <div>
              <p>Hue</p>
              <input
                type="range"
                className={'hue'}
                min="0"
                max="360"
                onChange={this.adjustHueSlider}
                value={this.state.h}
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
        <section className="button-section">
          <button className="random" onClick={this.randomColor}>
            Random Color
          </button>
        </section>
      </>
    )
  }
}

export default App
