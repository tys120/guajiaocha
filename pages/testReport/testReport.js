import monitor from '/alipayLogger'
Page({
  data: {
    startTime:'',
    endTime:"",
    report:[
    //   {
    //   isFinish:true,
    //   reportTime:"2020-12-30 14:00",
    //   keshi:"耳鼻喉科",
    //   inspectName:'乙肝两对半',
    //   name:"张三",
    //   number:"11-1",
    //   cardNumber:"24235325436436",
    //   id:0
    // }
  ]
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
    this.getReport()
    var newDate=new Date()
    var year=newDate.getFullYear()
    var month=(parseInt(newDate.getMonth())+1)>9?(parseInt(newDate.getMonth())+1):"0"+(parseInt(newDate.getMonth())+1)
    var day=(newDate.getDate())>9?newDate.getDate():"0"+newDate.getDate()
    this.data.startTime=year+"-"+month+"-"+day
    this.data.endTime=year+"-"+month+"-"+day
  },
  lookDescribe(ev){
    my.navigateTo({
      url: '/pages/testReport/testReportDes/testReportDes?report='+  JSON.stringify(this.data.report[ev.target.dataset.info]),
    });
    
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
  getReport(){
    // my.request({
    //   url: 'https://httpbin.org/report/jy/list',
    //   method: 'GET',
    //   data: {
    //      patientId:my.getStorage({key: 'default'}).id;,
    //      beginDate:moment(this.startDate , "YYYY/MM/DD").format("YYYYMMDD"),
    //      endDate:moment(this.endDate , "YYYY/MM/DD").format("YYYYMMDD"),
    //   },
    //   dataType: 'json',
    //   success: function(res) {
    //     that.setData({
    //       report:res.data
    //     })
    //      monitor.api('报告查询', true, 200, 200,'业务处理成功')
    //   },
    //   fail: function(res) {
    //     my.showToast({
    //       content:res.Msg
    //     })
    //       monitor.api('报告查询', false, 200, 404,'业务处理失败')
    //   }
    // });

    this.setData({
      report: [
    //     {
    //   isFinish:true,
    //   reportTime:"2020-12-30 14:00",
    //   keshi:"耳鼻喉科",
    //   inspectName:'乙肝两对半',
    //   name:"张三",
    //   id:0,
    //   recordId:"11-1",
    //   cardNum:"24235325436436",
    //   userSex:"男",
    //   userAge:"22",
    //   diagnosis:"正常",
    //   departmentId:"24235325",
    //   departmentName:"耳鼻喉科",
    //   itemName:"乙肝两对半",
    //   applyDoctorId:"24235325",
    //   applyDoctorName:"马医生",
    //   applyDate:"2020-12-31 14:00",
    //   reportDate:"2020-12-31 15:00",
    //   confirmDate:"2020-12-31 16:00",
    //   reportDoctorId:"24235321",
    //   reportDoctorName:"田医生",
    //   confirmDoctorId:"242353222",
    //   confirmDoctorName:"田医生",
    //   reportPdfUrl:"https://gw.alipayobjects.com/os/bmw-prod/94345b09-6ad5-4b0a-9ad7-c55fb09619aa.pdf",
    //   reportImageUrl:"https://gw.alipayobjects.com/mdn/rms_6c25e6/afts/img/A*H_rWQLPOkqwAAAAAAAAAAAAAARQnAQ",
    //   children:[
    //     {itemName:"白细胞",
    //     result:"13",
    //     tip:"NORMAL",
    //     reference:"3.5~9.5"},
    //     {itemName:"淋巴细胞绝对值",
    //     result:"3.95",
    //     tip:"HIGH",
    //     reference:"3.5~9.5"},
    //     {itemName:"红细胞",
    //     result:"12.45",
    //     tip:"LOW",
    //     reference:"3.8~5.1"}]
    // }
  ]
    })
  }
});
