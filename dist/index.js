#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
let print = console.log;
const program = new commander_1.Command();
program
    .name("hello-world")
    .description("A simple Hello World CLI tool")
    .version("0.1.0");
program.command("split")
    .description('Split a string into substrings and display as an array')
    .argument('<string>', 'string to split')
    .argument('<string>', 'another str')
    .option('--first', 'display just the first substring')
    .option('-s, --separator <char>', 'separator character', ',')
    .action((str, str2, options) => {
    print(str, str2);
    print(options);
    // process.cwd()
});
program.parse();
