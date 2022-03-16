const http = require('http');
const fs = require('fs');
// 创建一个服务器请求createServer
const server = http.createServer((request, response) => {
    const { url, method ,headers} = request
    if (url === '/' && method === 'GET'){
        // 静态页面服务
        fs.readFile('index.html',(err,data) => {
          if(err) response.writeHead(500, {'Content-Type': 'text/plain;charset=utf-8'})
          else{
            response.statusCode = 200
            response.setHeader('Content-Type','text/html')
            response.end(data)
          }
        })
    }else if(url === '/users' && method === 'GET'){
        // Ajax接口服务
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({
            name : 'laowang'
        }))
    }else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1){
        // 图片文件服务
        fs.createReadStream('./'+url).pipe(response)
    }
})
server.listen(3001)

// 打印原型链
function getPrototypeChain(obj) {
  var protoChain = [];
  while (obj = Object.getPrototypeOf(obj)) {//返回给定对象的原型。如果没有继承属性，则返回 null 。
     protoChain.push(obj);
  }
  protoChain.push(null);
  return protoChain;
}