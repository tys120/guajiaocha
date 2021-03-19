import moment from "moment"
Page({
  data: {
    list:[
      // {
      // regKind:'1',
      // status:'1',
      // payMode:"0",
      // source:"2",
      // regTime:"20200523",
      // visitDate:"20200523121500",
      // doctorName:"杨相伟",
      // price:100,
      // patientName:"兔兔",
      // deptName:"急诊科"
    // }
  ],
  },
  onLoad() {
    this.getList()
  },
  getList(){
    // my.request({
    //   url: 'https://httpbin.org/registerrecord/fromHis/list',
    //   method: 'GET',
    //   data: {
    //      patientId:my.getStorage({key: 'default'}).id;,
    //      beginDate:'20200101',
    //      endDate:'20300101',
    //   },
    //   dataType: 'json',
    //   success: function(res) {
    //     that.setData({
    //       list:res.data
    //     })
    //   },
    //   fail: function(res) {
    //     my.showToast({
    //       content:res.Msg
    //     })
    //   }
    // });
    this.data.list.forEach(item => {
      if (item.regKind == '0') {
        item.regKind = '普通挂号'
      } else {
        item.regKind = '预约挂号'
      } 
      // 状态 status
      if (item.status == '1') {
        item.status = '待就诊'
      } else if (item.status == '2'){
        item.status = '已就诊'
      } else if (item.status == '3'){
        item.status = '已退号'
      }
      // 支付方式 payMode
      if (item.payMode == '0') {
        item.payMode = '微信'
      } else if (item.payMode == '1'){
        item.payMode = '支付宝'
      } else if (item.payMode == '2'){
        item.payMode = '现金'
      } else if (item.payMode == '3'){
        item.payMode = '医保卡'
      }

      if (item.source == '1'){
        item.source = '窗口'
      } else if (item.source == '2'){
        item.source = '公众号'
      } else if (item.source == '3'){
        item.source = 'app'
      } else if (item.source == '4'){
        item.source = '小程序'
      } else if (item.source == '9'){
        item.source = '其他'
      }
      item.regTime = moment(item.regTime , "YYYYMMDD").format("YYYY-MM-DD")
      item.visitDate = moment(item.visitDate , "YYYYMMDDHHmmss").format("YYYY-MM-DD HH:mm:ss")
    });
    this.setData({
      list:this.data.list
    })
  },
  onItemClick(ev){
    console.log(ev)
    my.navigateTo({
      url: '/pages/appointmentRecord/appointmentRecordDetail/appointmentRecordDetail?info='+JSON.stringify(this.data.list[ev.index])
    });
  }
});
