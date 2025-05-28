#!/usr/bin/env node

import path from "path"
import { Command } from "commander";
import {init} from "./Commands/FileCreation"

// loop thru directory
//path.join(".", "folder")

let print = console.log

const program = new Command();

program
  .name("hello-world")
  .description("A simple Hello World CLI tool")
  .version("0.1.0")

program.command("split")
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .argument('<string>', 'another str')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, str2, options: {[key: string]: any}) => {
    print(str, str2)
    print(options)

    // Get Current directory process.cwd()
  });


init()
program.parse();