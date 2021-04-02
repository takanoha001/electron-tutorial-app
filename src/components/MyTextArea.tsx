import React, { Component } from "react";

export default class MyTextarea extends Component <any, any>{
  constructor(props:any) {
    super(props);

    this.state = {
      memo: this.props.greeting,

    };
    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
  }

  handleChange(e:any) {
    console.log(`${e.target.value}`);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  show() {
    console.log(`memo: ${this.state.memo}`);
  }

  render() {
    console.log("render() called");
    return (
      <form>
        <label htmlFor="memo">memo: </label>
        <br />
        <textarea
          id="memo"
          name="memo"
          cols={30}
          rows={7}
          value={this.state.memo}
          onChange={this.handleChange}
        ></textarea>
        <br />
        {/* <button type="button" onClick={this.show}>
          send
        </button> */}
      </form>
    );
  }
}
