const init = (program: any)=> {
  console.log("Loaded command!")
    program.command("split")
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .argument('<string>', 'another str')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str: string, str2: string, options: {[key: string]: any}) => {
    console.log(str, str2, options)

    // Get Current directory process.cwd()
  });

}

export {init}