import {extractRepo} from "./../Functions/extractRepo"

const TARGET_REPO: string = "https://github.com/prooheckcp/CLI_Tool_Template"

const init = (program: any)=> {
    program.command("init-cli")
    .description('Initiates a CLI project')
    .argument("[path]", 'string with the path to the directory')
    .option('-p, --path <string>', 'custom path')
    .action(async (pathArg: string, options: {[key: string]: any}) => {
        let targetPath: string = pathArg || options.path || process.cwd()
        await extractRepo(TARGET_REPO, targetPath)
    });
}

export {init}