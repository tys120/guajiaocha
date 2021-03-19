Page({
  data: {
    docInfo:{
      imageUrl:'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      deptName:'急诊科',
      name:"杨伟翔 主任医生",
      professionalTitle:"专业：xx"
    },
    weekData:[],
    activeTab:0,
    chooseDate:'',
    docID:"",
    timeRange:[{
      timeType:0,
      status:0,
      visitDate:"2021",
      beginTime:"14:00",
      endTime:"14:15",
      time:'14:00-14:15',
      fee:0
    },{
      timeType:1,
      status:1,
      visitDate:"2021",
      beginTime:"14:40",
      endTime:"15:00",
      time:'14:40-15：00',
      fee:0
    },{
      timeType:1,
      status:0,
      visitDate:"2021",
      beginTime:"15:15",
      endTime:"15:30",
      time:'15:15-15:30',
      fee:0
    },]
  },
  onLoad(options) {
    this.getVisitTime()
    var days = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
     var today=new Date();
      for(var i=0;i<7;i++){
          var newDate=new Date(today.getTime()+i*1000*60*60*24)
          var year=newDate.getFullYear()
          var month=(parseInt(newDate.getMonth())+1)>9?(parseInt(newDate.getMonth())+1):"0"+(parseInt(newDate.getMonth())+1)
          var day=(newDate.getDate())>9?newDate.getDate():"0"+newDate.getDate()
          var fullDate=`${month}-${day}`
          let sDate=`${year}-${month}-${day}`
          var dt = new Date(sDate.replace(/-/g, '/'));
          this.data.weekData.push({date:sDate,week:days[dt.getDay()]})
      }
      console.log(options)
      this.setData({
        chooseDate:this.data.weekData[this.data.activeTab],
        docInfo:JSON.parse(options.info)
      })
      // console.log(this.data.weekData)
  },
  changeTab(ev){
    this.setData({
      activeTab:ev.target.dataset.info,
    })
    this.data.chooseDate=this.data.weekData[this.data.activeTab]
    // this.setData({
    //   timeRange:this.data.timeRange
    // })
    this.getVisitTime()
  },
  chooseTime(ev){
    if (this.data.timeRange[ev.target.dataset.index].status == 0) {
        my.showToast({
          type: 'fail',
          content: '此时段已无号'
        });
        return
      }
    // my.navigateTo({url: '/pages/consultation/consultationDescribe/consultationDescribe?userInfo='+JSON.stringify(this.data.userInfo) +'&info='+JSON.stringify(this.data.timeRange[ev.target.dataset.index])+'&ymd='+this.data.chooseDate.date});
    my.navigateTo({url: '/pages/consultation/consultationDescribe/consultationDescribe?docInfo='+JSON.stringify(this.data.docInfo) +'&info='+JSON.stringify(this.data.timeRange[ev.target.dataset.index])+'&ymd='+this.data.chooseDate.date});
  },
  onUnload: function () {
    this.data.weekData.length=0
  },
  getVisitTime(){
    // my.request({
    //   url: 'https://httpbin.org/schedule/list',
    //   method: 'GET',
    //   data: {
    //     doctorId: this.data.docInfo.id,
    //     visitDate: this.data.chooseDate
    //   },
    //   dataType: 'json',
    //   success: function(res) {
    //      res.data.data.map(item => {
    //        item.beginTime = moment(item.beginTime, "HHmm").format("HH:mm");
    //        item.endTime = moment(item.endTime, "HHmm").format("HH:mm");
    //        return item;
    //      });
    //     this.setData({
    //       timeRange:res.data.data
    //     })
    //   },
    //   fail: function(res) {
    //     my.showToast({
    //       content:res.Msg
    //     })
    //   }
    // });
  }
});
