import path from "path"
import { rename, readdir, rm } from 'fs/promises'
import { existsSync } from "fs"

const { exec } = require('child_process')
const TEMP_NAME: string = "repo"

const extractRepo = async (repo: string, targetPath: string) => {
    targetPath = path.join(targetPath, TEMP_NAME)

    await new Promise<void>(resolve =>{
        exec(`git clone ${repo} ${targetPath}`, (error: any, _stdout: string, stderr: string) => {
            if (error) {
                console.error(`exec error: ${error.message}`)
                return
            }
            if (stderr)
                console.error(`stderr: ${stderr}`);

            resolve()
        })
        }).then<void>(async _ => {
            const files: string[] = await readdir(targetPath)

            files.forEach(async (file: string) => {
                // Need to check if it exists and if yes then delete it?
                let moveToPath: string = path.join(targetPath, "..", file)
                let baseName =  path.basename(moveToPath)
                
                if (baseName == ".git")
                    return

                if (existsSync(moveToPath))
                    await rm(moveToPath, { recursive: true, force: true })

                await rename(path.join(targetPath, file), moveToPath)
            })
        }).then(async _ => {
            await rm(targetPath, { recursive: true, force: true })
        })
}

export {extractRepo}