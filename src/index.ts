#!/usr/bin/env node

import path from "path"
import { Command } from "commander"
import fs from "fs"
import {getNestedFiles} from "./Functions/fileUtil"

const COMMANDS_DIRECTORY: string = path.join(__dirname, "Commands")

const program = new Command();

program
  .name("hello-world")
  .description("A simple Hello World CLI tool")
  .version("0.1.0") // Import from package.json

async function init(){
  for (const filePath of await getNestedFiles(COMMANDS_DIRECTORY)){
    const module = require(filePath);
    module.init(program)
  }

  program.parse();
}

init();