import src1 from './small.png';
import src2 from './big.png';

// 新版 url-loader file-loader 默认支持的是 esModule，也就是同esModule的方式导出文件，所以这里修改为了import 方式引入，
// 也可以修改配置 esModule: false,关闭esModule，从而可以不修改这个文件的代码继续使用CommonJS语法

var img1 = document.createElement('img');
img1.src = src1;
document.body.appendChild(img1);

var img2 = document.createElement('img');
img2.src = src2;
document.body.appendChild(img2);
