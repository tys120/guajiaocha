Page({
  data: {
    weekData:[],
    activeTab:0,
    chooseDate:'',
    deptId:"",
    timeRange:[
    //   {
    //   id:"1",
    //   name:"杨伟翔 主任医生",
    //   professionalTitle:"专业：xx",
    //   imageUrl:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
    //   deptName:"急诊科"
    // },{
    //   id:"2",
    //   name:"杨伟翔 主任医生",
    //   professionalTitle:"专业：xx",
    //   imageUrl:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
    //   deptName:"急诊科"
    // },{
    //   id:"3",
    //   name:"杨伟翔 主任医生",
    //   professionalTitle:"专业：xx",
    //   imageUrl:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
    //   deptName:"急诊科"
    // },
  ]
  },
  onLoad(options) {
    this.getDoctorList()
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
      this.setData({
        chooseDate:this.data.weekData[this.data.activeTab]
      })
      this.data.deptId=options.id
      // console.log(this.data.weekData)
  },
  changeTab(ev){
    this.setData({
      activeTab:ev.target.dataset.info,
    })
    this.data.chooseDate=this.data.weekData[this.data.activeTab]
    this.setData({
      timeRange:this.data.timeRange
    })
  },
  chooseTime(ev){
    my.navigateTo({url: '/pages/consultation/scheduling/scheduling?info='+JSON.stringify(this.data.timeRange[ev.target.dataset.index])+'&ymd='+this.data.chooseDate.date});
  },
  onUnload: function () {
    this.data.weekData.length=0
  },
  getDoctorList(){
    // my.request({
    //   url: 'https://httpbin.org/doctor/list',
    //   method: 'GET',
    //   data: {
    //     deptId:this.data.deptId
    //   },
    //   dataType: 'json',
    //   success: function(res) {
    //     if(res.data.data.length > 0){
    //     res.data.data.forEach(item =>{
    //       if (item.professionalTitle == null) {
    //         item.professionalTitle = ''
    //       }
    //     })
    //   } else {
    //     this.showMsg = true
    //   } 
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
