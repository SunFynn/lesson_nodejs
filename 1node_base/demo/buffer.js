// 创建⼀个⻓度为10字节以0填充的Buffer
const buf1 = Buffer.alloc(10);
console.log(buf1);  // <Buffer 00 00 00 00 00 00 00 00 00 00>

// 创建⼀个Buffer包含ascii.
// ascii 查询 http://ascii.911cha.com/
const buf2 = Buffer.from('a');
console.log(buf2, buf2.toString());    // <Buffer 61> a

// 创建Buffer,默认使用UTF-8字节
// UFT-8：⼀种变⻓的编码⽅案，使⽤ 1~6 个字节来存储；
// UFT-32：⼀种固定⻓度的编码⽅案，不管字符编号⼤⼩，始终使⽤ 4 个字节来存储；
// UTF-16：介于 UTF-8 和 UTF-32 之间，使⽤ 2 个或者 4 个字节来存储，⻓度既固定⼜可变。
const buf3 = Buffer.from('Buffer创建⽅法');
console.log(buf3, buf3.toString());   // <Buffer 42 75 66 66 65 72 e5 88 9b e5 bb ba e2 bd 85 e6 b3 95> Buffer创建⽅法

// 写⼊Buffer数据
buf1.write('hello');
console.log(buf1, buf1.toString());    // <Buffer 68 65 6c 6c 6f 00 00 00 00 00> hello

// 合并Buffer
const buf4 = Buffer.concat([buf1, buf3]);
console.log(buf4.toString());  // helloBuffer创建⽅法