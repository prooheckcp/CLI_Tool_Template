#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .name("hello-world")
  .description("A simple Hello World CLI tool")
  .version("0.1.0")
  .action(() => {
    console.log("Hello World!");
    console.log("UwU")
  });

program.parse();