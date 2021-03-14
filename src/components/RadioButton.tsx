//import "./RadioButton.css";
import React, { Component } from "react";

export class RadioButton extends Component {
  state = {
    samplingFrequency: "48000",
    bufferSize: "32",
  };

  onChange = (e: { target: { name: any; value: any; }; }) => {
    //this.setState({ value: e.target.value });
    //[e.target.name] is value1 or bufferSize name="value"
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { samplingFrequency, bufferSize } = this.state;
    return (
      <div className="RadioButton">
        <header className="RadioButton-header">
          <form>
            <h4>
              debug: value set is {samplingFrequency} : {bufferSize}
            </h4>
            <p>sampling frequencies</p>

            <label>
              48000
              <input
                type="radio"
                value="48000"
                name="samplingFrequency" //value or value 2
                checked={samplingFrequency === "48000"}
                onChange={this.onChange}
              />
            </label>

            <label>
              49000
              <input
                type="radio"
                value="49000"
                name="samplingFrequency" //value or value 2
                checked={samplingFrequency === "49000"}
                onChange={this.onChange}
              />
            </label>
            <p>buffer size</p>

            <label>
              32
              <input
                type="radio"
                value="32"
                name="bufferSize" //value or value 2
                checked={bufferSize === "32"}
                onChange={this.onChange}
              />
            </label>
            <label>
              48
              <input
                type="radio"
                value="48"
                name="bufferSize" //value or value 2
                checked={bufferSize === "48"}
                onChange={this.onChange}
              />
            </label>
          </form>
        </header>
      </div>
    );
  }
}