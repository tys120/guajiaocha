Page({
  data: {
    userInfo:{
      avtor:'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
      keshi:'急诊科',
      range:"下午",
      hasNot:true,
      name:"杨伟翔 主任医生",
      zhiwei:"专业：xx",
      time:'14:00-14:15',
      goodAt:"擅长：儿童及成人内分泌疾病，甲状腺童及成人内分泌疾病，甲状腺童及成人内分泌疾病，甲状腺",
      money:0
    },
    weekData:[],
    activeTab:0,
    chooseDate:'',
    timeRange:[{
      range:"下午",
      hasNot:true,
      time:'14:00-14:15',
      money:0
    },{
      range:"下午",
      hasNot:true,
      time:'14:40-15：00',
      money:0
    },{
      range:"下午",
      hasNot:true,
      time:'15:15-15:30',
      money:0
    },]
  },
  onLoad(options) {
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
    
    // my.navigateTo({url: '/pages/consultation/consultationDescribe/consultationDescribe?userInfo='+JSON.stringify(this.data.userInfo) +'&info='+JSON.stringify(this.data.timeRange[ev.target.dataset.index])+'&ymd='+this.data.chooseDate.date});
    my.navigateTo({url: '/pages/chooseCard/chooseCard?userInfo='+JSON.stringify(this.data.userInfo) +'&info='+JSON.stringify(this.data.timeRange[ev.target.dataset.index])+'&ymd='+this.data.chooseDate.date});
  },
  onUnload: function () {
    this.data.weekData.length=0
  },
});
