Page({
  data: {
    startTime:'',
    endTime:"",
    report:[{
      isFinish:true,
      time:"2020-12-30 14:00",
      keshi:"耳鼻喉科",
      reportName:'乙肝两对半',
      name:"张三",
      number:"11-1",
      cardNumber:"24235325436436",
      id:0
    }]
    // report:[{
    //   checkId:"15589663",
    //   reportTime:"2020-12-13",
    //   doctorName:"马天气",
    //   inspectName:"血常规",
    //   children:[{
    //     resultId:"1",
    //     itemName:"白细胞",
    //     result:"13",
    //     tip:"正常",
    //     refRange:"3.5~9.5"
    //   },{
    //     resultId:"2",
    //     itemName:"淋巴细胞绝对值",
    //     result:"3.95",
    //     tip:"高↑",
    //     refRange:"3.5~9.5"
    //   },{
    //     resultId:"3",
    //     itemName:"红细胞",
    //     result:"12.45",
    //     tip:"低↓",
    //     refRange:"3.8~5.1"}]
    // },{
    //   checkId:"15589667",
    //   reportTime:"2020-12-13",
    //   doctorName:"马天气",
    //   inspectName:"血常规",
    //   children:[{
    //     resultId:"1",
    //       itemName:"白细胞",
    //       result:"13",
    //       tip:"正常",
    //       refRange:"3.5~9.5"
    //   },{
    //     resultId:"2",
    //       itemName:"淋巴细胞绝对值",
    //     result:"3.95",
    //     tip:"高↑",
    //     refRange:"3.5~9.5"
    //   },{
    //     resultId:"3",
    //     itemName:"红细胞",
    //     result:"12.45",
    //     tip:"低↓",
    //     refRange:"3.8~5.1"}]
    // }]
  },
  onLoad() {
    var newDate=new Date()
    var year=newDate.getFullYear()
    var month=(parseInt(newDate.getMonth())+1)>9?(parseInt(newDate.getMonth())+1):"0"+(parseInt(newDate.getMonth())+1)
    var day=(newDate.getDate())>9?newDate.getDate():"0"+newDate.getDate()
    this.data.startTime=year+"-"+month+"-"+day
    this.data.endTime=year+"-"+month+"-"+day
    // for(let i=0;i<this.data.report.length;i++){
    //   this.data.report[i].children.unshift({
    //     resultId:"0",
    //     itemName:"项目名称",
    //     result:"结果",
    //     tip:"提示",
    //     refRange:"参考范围"
    //   })
    // }
    // this.setData({
    //   report:this.data.report
    // })
  },
  lookDescribe(ev){
    my.navigateTo({url: '/pages/testReport/testReportDes/testReportDes?id='+this.data.report[ev.target.dataset.info].id});
  },
  datePicker(ev) {
    my.datePicker({
      currentDate:this.data.startTime,
      success: (res) => {
        let oldStart=this.data.startTime
        let oldend=this.data.endTime
        if(ev.target.dataset.type==="start"){
          this.setData({
            startTime:res.date
          })
        }else{
          this.setData({
            endTime:res.date
          })
        }
        if(this.data.startTime>this.data.endTime){
          my.showToast({
            content:"结束时间不能大于开始时间",
            duration:3000,
            success:()=>{
              this.setData({
                startTime:oldStart,
                endTime:oldend
              })
            }
          })
        }
      },
    });
  },
});
