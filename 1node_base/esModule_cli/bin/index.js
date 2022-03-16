#!/usr/bin/env node
// 指定脚本解释器为node， 以上的内容，必须是在文件的第一行，不然会报错
import program from "commander";
import init from "../lib/init.js";
import refresh from "../lib/refresh.js";

program.command("init <name>").description("init project").action(init);

program.command("refresh").description("refresh routers...").action(refresh);

program.parse(process.argv);