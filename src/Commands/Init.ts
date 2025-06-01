const { exec } = require('child_process')

const TARGET_REPO: string = "prooheckcp/RobloxTemplate"

const init = (program: any)=> {
  
    program.command("init")
    .description('Initiates a git project and extracts it into the current folder')
    .option('--first', 'display just the first substring')
    .option('-p, --path <string>', 'custom path')
    .action((options: {[key: string]: any}) => {
        console.log("Options: ", options)
        new Promise<void>(resolve =>{
            exec(`git clone ${TARGET_REPO} ${process.cwd()}`, (error: any, stdout: string, stderr: string) => {
                if (error) {
                    console.error(`exec error: ${error.message}`)
                    return
                }
                if (stderr)
                    console.error(`stderr: ${stderr}`);

                console.log(`stdout: ${stdout}`);
                resolve()
            })
         })
    });

}

export {init}