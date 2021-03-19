Page({
  data: {
    orderInfo:{}
  },
  onLoad(options) {
    this.data.orderInfo=JSON.parse(options.info)
    console.log(this.data.orderInfo)
  },
  onTest(){
    my.confirm({
      title: '温馨提示',
      content: '请确认以上信息准确',
      confirmButtonText: '确定',
      cancelButtonText: '我再看看',
      success: (result) => {
        if(result.confirm){
          my.navigateTo({
            url: '/pages/result/result'
          });
        }
      },
    });
  }
});
