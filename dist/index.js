#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const commander_1 = require("commander");
const fileUtil_1 = require("./Functions/fileUtil");
const COMMANDS_DIRECTORY = path_1.default.join(__dirname, "Commands");
const program = new commander_1.Command();
program
    .name("hello-world")
    .description("A simple Hello World CLI tool")
    .version("0.1.0"); // Import from package.json
async function init() {
    for (const filePath of await (0, fileUtil_1.getNestedFiles)(COMMANDS_DIRECTORY)) {
        const module = require(filePath);
        module.init(program);
    }
    program.parse();
}
init();
