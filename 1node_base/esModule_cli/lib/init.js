import { promisify } from "util";
import figlet from "figlet";
import clear from "clear";
import chalk from "chalk";
import clone from "./download.js";
import open from "open";

import { spawn } from "child_process";

const co_figlet = promisify(figlet);
const log = (content) => console.log(chalk.green(content));

// promisiy化spawn
// 对接输出流
const asyncSpawn = async (...args) => {
  return new Promise((resolve) => {
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on("close", () => {
      resolve();
    });
  });
};

export default async (name) => {
  // 打印欢迎画面
  clear();
  const data = await co_figlet("lmm Welcome");
  log(data);

  log("🚀创建项目:" + name);
  // 从github克隆项目到指定文件夹
  await clone("github:SunFynn/react-scaffold", name);

  log("安装依赖");
  await asyncSpawn("npm.cmd", ["install"], { cwd: `./${name}` });
  log(
    chalk.green(`
👌安装完成：
To get Start:
===========================
  cd ${name}
  npm run start
===========================
          `)
  );

  // 打开浏览器
  open(`http://localhost:8080`);
  await spawn('npm.cmd', ['run', 'start'], { cwd: `./${name}` })
};
