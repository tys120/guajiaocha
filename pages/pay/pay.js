Page({
  data: {
    info:[
  //     {
  //     totalAmt:100,
  //     deptName:'急诊科',
  //     name:'唐松',
  //     time:'2021-03-11 13:30',
  //     id:"841e87e23ba625af868b018c5cvasc36",
  //     doctorName:'杨祥伟',
  //     type:1,
  //     isPay:false
  //   },
  // {
  //     totalAmt:100,
  //     deptName:'急诊科',
  //     name:'唐松',
  //     time:'2021-03-12 13:30',
  //     id:"841e87e23ba625af868b018c5cvasc36",
  //     doctorName:'风华放',
  //     type:2,
  //     isPay:false
  //   },
  // {
  //     totalAmt:100,
  //     deptName:'急诊科',
  //     name:'唐松',
  //     time:'2021-03-12 13:30',
  //     id:"841e87e23ba625af868b018c5cvasc36",
  //     doctorName:'风华放',
  //     type:2,
  //     isPay:true
  //   }
  ]
  },
  onLoad() {
    this.getPayList()
  },
  lookDescribe(ev){
    my.navigateTo({url: '/pages/pay/payDescribe/payDescribe?info='+JSON.stringify(this.data.info[ev.target.dataset.info])});
  },
  getPayList(){
    // my.request({
    //   url: 'https://httpbin.org/payment/list',
    //   method: 'GET',
    //   data: {
    //     patientId:my.getStorage({key: 'default'}).id;
    //   },
    //   dataType: 'json',
    //   success: function(res) {
   //     that.setData({
    //       info:res.data.data
    //     })
    //   },
    //   fail: function(res) {
    //     my.showToast({
    //       content:resizeBy.msg
    //     })
    //   }
    // });
  }
});
