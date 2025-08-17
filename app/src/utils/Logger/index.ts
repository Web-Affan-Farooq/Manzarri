class Logger {
    path: string;
    constructor(path: string) {
        this.path = path
    }
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    log(lineNumber: number, message: string, data: any) { 
        return console.log(`\n Line-${lineNumber} \n route:${this.path} \n message:${message} \n data: `, data, `\n`)
    }
}
export default Logger