const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');
const { clone } = require('./download');
const spawn = async (...args) => {
    const { spawn } = require('child_process');
    return new Promise(resolve => {
        const proc = spawn(...args);
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.on('close', () => {
            resolve();
        })
    })
}
const log = content => console.log(chalk.green(content))
module.exports = async name => {
    // 打印欢迎画面
    clear()
    const data = await figlet('wtz Welcome')
    log(data)

    // 创建项目
    log(`🚀创建项目:` + name)
    // 从github克隆项目到指定文件夹
    await clone('github:SunFynn/react-scaffold', name)

    // 安装项目依赖
    log('安装依赖')
    await spawn('npm.cmd', ['install'], { cwd: `./${name}` })
    log(`
👌安装完成：
To get Start:
===========================
    cd ${name}
    npm run start
===========================
            `)

    const open = require('open')
    open('http://localhost:8080')
    await spawn('npm.cmd', ['run', 'start'], { cwd: `./${name}` })
}