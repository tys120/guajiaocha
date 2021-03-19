Page({
  data: {
    startTime:'',
    endTime:"",
    // report:[{
    //   isFinish:true,
    //   time:"2020-12-30 14:00",
    //   keshi:"耳鼻喉科",
    //   reportName:'乙肝两对半',
    //   name:"张三",
    //   number:"11-1",
    //   cardNumber:"24235325436436",
    //   id:0
    // }]
    report:[{
      checkId:"15589663",
      reportTime:"2020-12-13",
      doctorName:"马天气",
      inspectName:"肺部CT",
      children:{
          checkName:"肺部CT",
          deptName:"内科",
          doctorName:"安芬太",
          checkPart:"肺部",
          checkMethod:"拍摄肺部CT",
          checkSituation:"无异物",
          imageTips:"????",
          option:"多喝热水"
      }
    },{
      checkId:"15589667",
      reportTime:"2020-12-11",
      doctorName:"马天气",
      inspectName:"脑部CT",
      children:{
          checkName:"肺部CT",
          deptName:"内科",
          doctorName:"安芬太",
          checkPart:"肺部",
          checkMethod:"拍摄肺部CT",
          checkSituation:"无异物",
          imageTips:"????",
          option:"多喝热水"
      }
    },{
      checkId:"15589667",
      reportTime:"2020-12-11",
      doctorName:"马天气",
      inspectName:"脑部CT",
      children:{
          checkName:"肺部CT",
          deptName:"内科",
          doctorName:"安芬太",
          checkPart:"肺部",
          checkMethod:"拍摄肺部CT",
          checkSituation:"无异物",
          imageTips:"????",
          option:"多喝热水"
      }
    },{
      checkId:"15589667",
      reportTime:"2020-12-11",
      doctorName:"马天气",
      inspectName:"脑部CT",
      children:{
          checkName:"肺部CT",
          deptName:"内科",
          doctorName:"安芬太",
          checkPart:"肺部",
          checkMethod:"拍摄肺部CT",
          checkSituation:"无异物",
          imageTips:"????",
          option:"多喝热水"
      }
    }]
  },
  onLoad() {
    var newDate=new Date()
    var year=newDate.getFullYear()
    var month=(parseInt(newDate.getMonth())+1)>9?(parseInt(newDate.getMonth())+1):"0"+(parseInt(newDate.getMonth())+1)
    var day=(newDate.getDate())>9?newDate.getDate():"0"+newDate.getDate()
    this.data.startTime=year+"-"+month+"-"+day
    this.data.endTime=year+"-"+month+"-"+day
  },
  lookDescribe(ev){
    my.navigateTo({url: '/pages/inspectionReport/inspectionReportDes/inspectionReportDes?id='+this.data.report[ev.target.dataset.info].id});
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
