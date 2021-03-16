Page({
  data: {
    info:{},
    userInfo:{},
    time:'',
    localName:''
  },
  onLoad(options) {
    this.data.info=JSON.parse(JSON.parse(options.options).info)
    this.data.userInfo=JSON.parse(JSON.parse(options.options).userInfo)
    this.data.time=JSON.parse(options.options).ymd
  },
  onTest(){
    if(this.data.localName.length===0){
      my.confirm({
      title: '提示',
      content: '您还没有填写就诊人信息，是否添加就诊人信息',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
       if(result.confirm){
         my.navigateTo({url: '/pages/management/modifyManagement/modifyManagement'});
       }
      },
    });
    return
    }
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
  },
  onShow:function(){
    let that=this
    my.getStorage({
      key: 'default',
      success(res) {
         that.setData({
           localName:res.data.name
         })
        },
    });
  }
});
