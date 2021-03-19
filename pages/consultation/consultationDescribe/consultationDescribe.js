import monitor from '/alipayLogger'
Page({
  data: {
    info:{},
    docInfo:{},
    userInfo:{},
    time:'',
    localName:''
  },
  onLoad(options) {
    my.getStorage({
      key: 'default',
      success: (result) => {
        this.setData({
          localName:result.data
        })
      },
    });
    console.log(options)
    this.data.info=JSON.parse(options.info)
    this.data.docInfo=JSON.parse(options.docInfo)
    this.data.time=options.ymd
    // this.data.userInfo=JSON.parse(options.cardInfo)
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
        // my.request({
        //   url: 'https://httpbin.org/registerrecord',
        //   method: 'POST',
        //   data: {
                // patientId: this.data.userInfo.id, 
                // patientName:this.data.userInfo.name,
                // hospitalId: ,
                // hospitalName:,
                // deptName:this.data.docInfo.deptName,
                // deptId: this.data.docInfo.deptId,
                // doctorId: this.data.docInfo.doctorId,
                // doctorName:this.data.docInfo.doctorName,
                // scheduleId: this.info.id,
                // regTypeId:this.info.kind
        //   },
        //   dataType: 'json',
        //   success: function(res) {
              // my.tradePay({
                //   // 调用统一收单交易创建接口（alipay.trade.create），获得返回字段支付宝交易号trade_no
                //   tradeNO: '201711152100110410533667792',
                //   success: (res) => {
                // my.request({
                //   url: 'https://httpbin.org/post',
                //   method: 'GET',
                //   data: {
                //     openid:my.getStorage({key: 'openid'});
                //   },
                //   dataType: 'json',
                //   success: function(res) {
                //    monitor.api('预约挂号', true, 200, 200,'业务处理成功')
                //     my.navigateTo({
                //       url: '/pages/result/result'
                //     });
                //   },
                //   fail: function(res) {
                //     monitor.api('预约挂号', false, 200, 404,'业务处理失败')
                //   }
                // });
        //   },
        //   fail: function(res) {
        //     my.showToast({
        //       content:res.Msg
        //     })
        //   }
        // });

        
        //   },
        //   fail: (res) => {
        //     my.alert({
        //       content: JSON.stringify(res),
        //     });
        //   }
        // });
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
