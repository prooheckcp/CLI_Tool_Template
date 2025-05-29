import fs from "fs"
import path from "path"

export async function getNestedFiles(directory: string, _extension?: string): Promise<string[]>{
    let filesArray: string[] = []

    try {
        const files = await fs.promises.readdir(directory)
        console.log("Our files: ", files)
        for (const file of files){
            console.log("///////////\nDirectory: ", path.join(directory, file))
            let pathStat: fs.Stats = fs.statSync(path.join(directory, file))
            if (pathStat.isDirectory())
                filesArray = files.concat(filesArray, await getNestedFiles(directory))
            else if(pathStat.isFile())
                files.push(path.join(directory, file))
        }
    }
    catch(err){
        console.log(err)
    }

    return filesArray
}