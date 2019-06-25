import inter from 'interface.js';
var Promise = require('./es6-promise.js');
var app = getApp();
app.inter = inter;
var Promise = require('./es6-promise.js');

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  curCallback: null,
  curFail: null,
  request(options) {
    var url = ''
    if (options.interFn) {
      url = options.interFn(inter[options.inter]);
    } else {
      url = inter[options.inter];
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: inter.domain + url,
        data: options.data,
        //header: { 'content-type': 'application/json' },
        method: options.method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        success: function (res) {
          // 22000 成功
          // 22001 通用错误
          // 22002 系统错误(不要展示给用户)
          // 22003 数据库错误
          // 22004 缺少参数
          // 22005 没有数据
          // 22006 参数错误
          // 22007 数据状态错误
          // 23001 未登录
          // 24001 没有这个产品
          // 24001 产品状态错误
          // 24003 产品价格错误
          if (res.data.app_code == 22000 || res.data.app_code == 23001) {
            resolve({
              status: res.statusCode,
              result: res.data.result
            });
          } else {
            reject(res)
          }
        },
        fail: function (res) {
          reject('error')
        },
        complete: function (res) {

        }
      })
    });

  }
}