//⼆进制友好，图⽚操作
const fs = require('fs');
const rs2 = fs.createReadStream('./img.png');
const ws2 = fs.createWriteStream('./img_1.png');
rs2.pipe(ws2);

// 流的操作，将img.png图片复制拷贝了一份，生成了img_1.png图片