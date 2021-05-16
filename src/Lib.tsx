//import {JackdVersion} from "../src/native/System";

import { spawnSync, spawn } from "child_process";

/**
 * JackdVersion
 * 
 * returns jackd version
 * 
 * eg. ",jackdmp 1.9.11" we want 1.9.11
 */
export let JackdVersion = () =>{
  let cmd = "pwd"
  let params = ["-v"];

  const chd = spawnSync(cmd , params);

  // const words = chd.output.toString().split(' ');
  // const version = words[1].replace('Copyright','').replace(/(^[ \t]*\n)/gm, "");


  return {
    command: `command: ${cmd}`,
    process: chd
  }
}




export async function handleInitialize(){
  ///Users/Dicekay/projects/pcma/github/tutorial/electron-tutorial-app/build
  let a = JackdVersion();
  console.log(a.command);
  console.log("------- Test....")
  console.log(a.process.stdout);

  let b = listing();

  console.log("test:" + b.command);
  console.log("test:" + b.process.stderr);
  console.log("test:" + b.process.stdout.toString());

  b = helloWorld();

  console.log("test:" + b.command);
  console.log("test:" + b.process.stderr);
  console.log("test:" + b.process.stdout);


  let c = helloWorldRepeat();
  // all these guys print "object" so useless
  // console.log("test1a:" + c.command);
  // console.log("test1b:" + c.process.stderr);
  // console.log("test1c:" + c.process.stdout);
  // console.log("test1d:" + c.process.stderr.toString());
  // console.log("test1e:" + c.process.stdout.toString());
  sendOutput(c.process);

  // c = startJacktrip();
  // console.log("test1:" + c.command);
  // console.log("test1:" + c.process.stderr);
  // console.log("test1:" + c.process.stdout);
  // console.log("test1:" + c.process.stderr.toString());
  // console.log("test1:" + c.process.stdout.toString());
  // sendOutput(c.process);
  
  return true;
}

const { exec } = require('child_process');

/**
 *
  let b = listing();
  console.log("test:" + b.command);
  console.log("test:" + b.process.stdout.toString());
 */
export function listing(){
  
  let cmd = "ls"
  let params = ["-lh"];

  const chd = spawnSync(cmd , params);

  return {
    command: `command: ${cmd} ${params}`,
    process: chd
  }
}

export function helloWorld(){
  let dir = "/Users/Dicekay/projects/pcma/github/tutorial/electron-tutorial-app/cpp_program";
  let cmd = "helloWorld"

  let comm = dir+ "/"+cmd;
  let params = [""];

  const chd = spawnSync(comm , params);

  return {
    command: `command: ${comm} ${params}`,
    process: chd
  }
}

export function helloWorldRepeat(){

  let dir = "/Users/Dicekay/projects/pcma/github/tutorial/electron-tutorial-app/cpp_program";
  let cmd = "helloWorldRepeat"

  let comm = dir+ "/"+cmd;
  let params = [""];

  return {
    command: `command: ${comm} ${params}`,
    process: spawn(comm, params)
  }

}

export function startJacktrip(){
  let dir = "";
  let cmd = "jacktrip"

  const comm = cmd;
  const params = ["-h"];

  return {
    command: `command: ${comm} ${params}`,
    process: spawn(comm, params)
  }
}


import { ChildProcessWithoutNullStreams } from 'child_process';

const sendOutput = (output: ChildProcessWithoutNullStreams | string) =>
{
  if (typeof output === 'string') {
      console.log(`${output}\n`);
  } else {
    output.stdout.on('data', (data) => {
      console.log(`${data.toString()}\n`);
    });
    output.stderr.on('data', (data) => {
      console.log(`${data.toString()}\n`);
    });
}
}