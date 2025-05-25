#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
program
    .name("hello-world")
    .description("A simple Hello World CLI tool")
    .version("0.1.0")
    .action(() => {
    console.log("Hello World!");
    console.log("UwU");
});
program.parse();
