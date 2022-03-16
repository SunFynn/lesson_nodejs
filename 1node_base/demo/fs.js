const fs = require('fs');

// 同步调⽤
const data = fs.readFileSync('./conf.js');  // 代码会阻塞在这⾥  【如果文件很大，阻塞事件会很长，导致后边的代码不能运行，消耗性能资源】
console.log(data, data.toString());   // <Buffer 61 62 63> abc    <Buffer 61 62 63>是二进制的结果，通过toString方法转换为正常的内容

// 异步调⽤ 【通过回调的方式来获取到文件内容】
fs.readFile('./conf.js', (err, data) => {
  if (err) throw err;
  console.log(data, data.toString());   // <Buffer 61 62 63> abc
});

// promisify  【promise方式来获取文件内容】
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
readFile('./conf.js').then(data => console.log(data, data.toString()));  // promise方式  <Buffer 61 62 63> abc
process.nextTick(async ()=>{ 
  const data = await readFile('./conf.js');
  console.log(data, data.toString());   // async await方式   <Buffer 61 62 63> abc
})