import React, { Component } from "react";
import { handleInitialize, JackdVersion } from "../Lib";
import { ChildProcessWithoutNullStreams } from 'child_process';

///////////
import { configure, getLogger } from "log4js";
const logger = getLogger();
//////////


import MyTextArea from "./MyTextArea";

const States = {
  INIT: 0,
  IDLE: 1,
  CONNECTED: 2,
  FIN: 3,
};


let globalText = "lala";

 
export default class TestStateMachine extends Component {  
  state = {
    current: States.INIT,
    textAreaValue: "init",
    greeting:'hello from test machine',
    //outputLogRef: React.createRef<HTMLTextAreaElement>()
  }; 

 
  transition(to:any) {
    logger.debug(" dbg : transition()" + to);
    //logger.error(" err : transition()" + to);
    logger.info("logger: transition()" + to);


    switch (to) {
      case States.IDLE:
        let a = JackdVersion();
        //sendLog(a.command);
        break;
      case States.CONNECTED:
        break;
      default:
        break;
    }

    this.setState({ current: to });
  }
  render() {
    switch (this.state.current) {
      case States.IDLE:
        return this.renderIdle();
      case States.CONNECTED:
        return this.renderConnected();
      case States.FIN:
        return this.renderFinish();
      case States.INIT:
      default:
        return this.renderInit();
    }
  }

  renderDiagram() {
     let img= __dirname + "/../../src/images/stateDiagram.jpg"
     return <img src={img} alt="PCMA. logo" />;
  }

  renderText(text:string)
  {
    globalText += "lalala";
    return <div> <MyTextArea greeting={globalText}/></div>;
  }

  renderInit() {

    let text = "@INIT - initializing to start the app...";

    return (
      <div>
        {this.renderDiagram()}
        <p> {text} </p>
        {/* here go to idle immediately... */}
        <button onClick={() => this.transition(States.IDLE)}>
          mimic going to the next stage upon click
        </button>
        {this.renderText(text)}
      </div>
          
     );
  }

  renderIdle() {

    let text = "@IDLE";

    return (
      <div>
        {this.renderDiagram()}
        <p> {text} </p>
        <button onClick={() => this.transition(States.FIN)}>
          exit the app{" "}
        </button>

        <button onClick={() => this.transition(States.CONNECTED)}>
          Connect
        </button>
        
      </div>
    );
  }

  renderConnected() {
    let text = "@CONNECTED";

    return (
      <div>
        {this.renderDiagram()}
        <p>{text} </p>
        <button onClick={() => this.transition(States.IDLE)}>Disconnect</button>
      </div>
    );
  }
  renderFinish() {
    let text = "@FINISH - end of app"
    return (
      <div>
        {this.renderDiagram()}
        <p>{text} </p>
        <button onClick={() => this.transition(States.INIT)}>
          Go back to init
        </button>
      </div>
    );
  }
}

 