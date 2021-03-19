Page({
  data: {
    item1: [
    //   {
    //   title: '缴款记录',
    //   titleIconUrl: 'https://gw.alipayobjects.com/mdn/industry_l/afts/img/A*c1YIRJk2AvcAAAAAAAAAAABkARQnAQ',
    //   fee: '826.00',
    //   valueUnit: '￥',
    //   status: '缴款成功',
    //   statusColor: '#FF6010',
    //   licensePlate: '860a538625930555684',
    //   payTime: '2018-06-03  10:00:00',
    //   showDetail: false,
    //   feeKind:"1",
    //   payMode:"微信"
    // }
  ]
  },
  onLoad() { 
    this.getRecord()
  },
  onClickDetail(val) {
    console.log('click:', val.target.dataset.info);
  },
  getRecord(){
    // my.request({
    //   url: 'https://httpbin.org/payrecord/list',
    //   method: 'GET',
    //   data: {
    //     patientId:my.getStorage({key: 'default'}).id;,
    //     hospitalId:my.getStorage({key: 'hosID'}),
    //   },
    //   dataType: 'json',
    //   success: function(res) {
    //     that.setData({
    //       item1:res.data
    //     })
    //   },
    //   fail: function(res) {
    //     my.showToast({
    //       content:res.Msg
    //     })
    //   }
    // });

     this.data.item1.forEach(item => {
          if (item.feeKind == '1') {
            item.feeKind = '门诊缴费'
          } else if (item.feeKind == '2'){
            item.feeKind = '住院预交费'
          }  else if (item.feeKind == '3'){
            item.feeKind = '挂号缴费'
          } else if(item.feeKind == '4'){
            item.feeKind = '体检预约缴费'
          } else if(item.feeKind == '5'){
            item.feeKind = '在线问诊缴费'
          }
     })
     this.setData({
       item1:this.data.item1
     })
  }
});