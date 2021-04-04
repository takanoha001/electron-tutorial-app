import React from 'react';


import { configure, getLogger } from "log4js";
//configure(__dirname + "/../../log4js.config.json");
const logger = getLogger();


export class Test extends React.Component {
  public render(): React.ReactNode {

    logger.info("Test::render()")

    return (
      <h1>Hello from Test class</h1>
    );
  }
}