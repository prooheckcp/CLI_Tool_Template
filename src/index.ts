#!/usr/bin/env node

import path from "path"
import { Command } from "commander"
import fs from "fs"
import {getNestedFiles} from "./Functions/fileUtil"

const COMMANDS_DIRECTORY: string = path.join(__dirname, "..", "src", "Commands")


const program = new Command();

program
  .name("hello-world")
  .description("A simple Hello World CLI tool")
  .version("0.1.0") // Import from package.json

async function init(){
  let x = await getNestedFiles(COMMANDS_DIRECTORY, "")

  console.log(x)


  program.parse();
}

init();