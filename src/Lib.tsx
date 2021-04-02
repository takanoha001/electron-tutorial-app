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
  

  return true;
}