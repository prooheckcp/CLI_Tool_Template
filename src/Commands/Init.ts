import path from "path"
import { rename, readdir, rm } from 'fs/promises'
import { existsSync } from "fs"

const { exec } = require('child_process')

const TARGET_REPO: string = "https://github.com/prooheckcp/RobloxTemplate"
const TEMP_NAME: string = "repo"

const init = (program: any)=> {
    program.command("init")
    .description('Initiates a git project and extracts it into the current folder')
    .argument("[path]", 'string with the path to the directory')
    .option('-p, --path <string>', 'custom path')
    .action(async (pathArg: string, options: {[key: string]: any}) => {

        /* 
        let targetPath: string = pathArg || options.path || process.cwd()
        let pastePath: string = path.join(targetPath, TEMP_NAME)

        await new Promise<void>(resolve =>{
            exec(`git clone ${TARGET_REPO} ${pastePath}`, (error: any, _stdout: string, stderr: string) => {
                if (error) {
                    console.error(`exec error: ${error.message}`)
                    return
                }
                if (stderr)
                    console.error(`stderr: ${stderr}`);

                resolve()
            })
         }).then<void>(async _ => {
            const files: string[] = await readdir(pastePath)

            files.forEach(async (file: string) => {
                // Need to check if it exists and if yes then delete it?
                let moveToPath: string = path.join(pastePath, "..", file)
                let baseName =  path.basename(moveToPath)
                
                if (baseName == ".git")
                    return

                if (existsSync(moveToPath))
                    await rm(moveToPath, { recursive: true, force: true })

                await rename(path.join(pastePath, file), moveToPath)
            })
         }).then(async _ => {
            await rm(pastePath, { recursive: true, force: true })
         })        
        */

    });

}

export {init}