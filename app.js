import Store from './store'
import monitor from './alipayLogger'
App(Store({
  onLaunch(options) {
    monitor.init({
      pid: "b7zvbyjz13/5zk3rws/87w==",
      options: options,
      sample: 1,
      autoReportApi: true,
      autoReportPage: true,
      // Http请求返回数据中状态码字段名称
      code: ["code","success","state"],
      // Http返回数据中的error message字段名称
      msg: ["msg"]
    });
    monitor.setCommonInfo({tag: '医汇医院'});

    my.getAuthCode({
    scopes: 'auth_user',
    success: (res) => {
      // my.alert({
      //   content: res.authCode,
      // });
      if (res.authCode) {
      my.request({
        url: 'http://39.103.166.64:9999/wechat/api/alilogin/'+res.authCode, 
        method:"POST",
        headers:{
          'content-type':'application/json', //默认值
          'channel':'alipay'  
        },
        // data: {
        //   authcode: res.authCode,
        // },
        success: (resp) => {
          console.log(resp)
        },
        fail: (resp) => {
          
        },
      });
    }
    console.log("authCode ",res.authCode)
    },
  });
  
  },
  onShow() {
    console.log('app onShow');
  },
  onHide() {
    console.log('--------onHide');
  },
  onError(msg) {
    console.log('app OnError: ', msg);
  },
  shareData: {
    name:"tys"
  },

}));
