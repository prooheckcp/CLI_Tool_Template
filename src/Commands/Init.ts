import {extractRepo} from "./../Functions/extractRepo"

const TARGET_REPO: string = "https://github.com/prooheckcp/RobloxTemplate"

const init = (program: any)=> {
    program.command("init")
    .description('Initiates a git project and extracts it into the current folder')
    .argument("[path]", 'string with the path to the directory')
    .option('-p, --path <string>', 'custom path')
    .action(async (pathArg: string, options: {[key: string]: any}) => {
        let targetPath: string = pathArg || options.path || process.cwd()
        await extractRepo(TARGET_REPO, targetPath)
    });

}

export {init}