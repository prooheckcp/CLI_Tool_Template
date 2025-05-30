import fs from "fs"
import path from "path"

export async function getNestedFiles(directory: string, extension?: string): Promise<string[]>{
    let filesArray: string[] = []

    try {
        const files = await fs.promises.readdir(directory)

        for (const file of files){
            let nestedDirectory: string = path.join(directory, file)
            let pathStat: fs.Stats = await fs.promises.stat(nestedDirectory)

            if (pathStat.isDirectory())
                filesArray = filesArray.concat(await getNestedFiles(nestedDirectory, extension))
            else if(pathStat.isFile()){                
                if (extension == null)
                    filesArray.push(nestedDirectory)
                else{
                    let extName: string = path.extname(nestedDirectory)

                    if (extName == extension || extName == `.${extension}`)
                        filesArray.push(nestedDirectory)
                }
            }           
        }
    }

    catch(err){
        console.log(err)
    }

    return filesArray
}