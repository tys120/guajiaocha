import Store from './store'
App(Store({
  onLaunch(options) {
    my.getAuthCode({
    scopes: 'auth_user',
    success: (res) => {
      // my.alert({
      //   content: res.authCode,
      // });
      console.log(res)
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

  },
}));
