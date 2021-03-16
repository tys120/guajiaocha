import { mockData } from './index.mock';

const path = '/immig/avatar.json';

export async function getAvatarInfo(param = {}) {
  // 样例为直接返回mock数据
  return mockData;
  // TODO 在这里进行数据处理
  // 异步请求示例代码
  // const promise = new Promise((resolve, reject) => {
  //   my.startLoading();
  //   my.httpRequest({
  //     url: 'http://httpbin.org/post',
  //     method: 'POST',
  //     data: {
  //       from: '支付宝',
  //       production: 'AlipayJSAPI',
  //     },
  //     dataType: 'json',
  //     success: function(res) {
  //       resolve(res);
  //       my.alert({content: 'success'});
  //     },
  //     fail: function(res) {
  //       reject(res);
  //       my.alert({content: 'fail'});
  //     },
  //     complete: function(res) {
  //       my.hideLoading();
  //     }
  //   });
  // });
  // const data = await promise;
  // return data;
}
