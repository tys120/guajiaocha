import monitor from '/alipayLogger'
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
        // my.request({
        //   url: 'https://httpbin.org/payment/outpatient',
        //   method: 'POST',
        //   data: {
        //    hisRegId: hisRegId,
        //    feeBillId:feeBillId,
        //    custId:localStorage.getItem('openid'),
        //    // patientId:this.$store.state.jzrInfo.id,
        //    // hospitalId:this.$store.state.hospitalInfo.id,
        //    patientId:localStorage.getItem('jzrId'),
        //    hospitalId:localStorage.getItem('HosId'),
        //    cost:this.total.toFixed(2).toString()
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
                //      if(this.data.orderInfo.type===1){
                //        monitor.api('挂号缴费', true, 200, 200,'业务处理成功')
                //      }else{
                //        monitor.api('门诊缴费', true, 200, 200,'业务处理成功')
                //      }
                //      my.navigateTo({
                //        url: '/pages/result/result'
                //      });
                //   },
                //   fail: function(res) {
                //      if(this.data.orderInfo.type===2){
                //        monitor.api('挂号缴费', true, 200, 404,'业务处理成功')
                //      }else{
                //        monitor.api('门诊缴费', true, 200, 404,'业务处理成功')
                //      }
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
        // if(result.confirm){
        //   if(this.data.orderInfo.type===1){
        //      monitor.api('挂号缴费', true, 200, 200,'业务处理成功')
        //   }else{
        //     monitor.api('门诊缴费', true, 200, 200,'业务处理成功')
        //   }
          my.navigateTo({
            url: '/pages/result/result'
          });
        // }else{
        //   if(this.data.orderInfo.type===2){
        //      monitor.api('挂号缴费', true, 200, 404,'业务处理成功')
        //   }else{
        //     monitor.api('门诊缴费', true, 200, 404,'业务处理成功')
        //   }
        //   // monitor.api('挂号缴费', false, 200, 404,'业务处理失败')
        // }
      },
    });
  }
});
