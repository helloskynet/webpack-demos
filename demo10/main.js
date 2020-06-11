// require.ensure(['./a'], function(require) {
//   var content = require('./a');
//   document.open();
//   document.write('<h1>' + content + '</h1>');
//   document.close();
// });

// 推荐使用import方式，，上面的也可继续使用
import('./a.js').then((require) => {
  document.open();
  document.write('<h1>' + require.default + '</h1>');
  document.close();
});
