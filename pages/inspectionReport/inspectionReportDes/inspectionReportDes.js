Page({
  data: {
    reportInfo:{
      // recordId:"",
      // cardNum:"",
      // userName:"",
      // userSex:"",
      // userAge:"",
      // diagnosis:"",
      // departmentId:"",
      // departmentName:"",
      // itemName:"",
      // applyDoctorId:"",
      // applyDoctorName:"",
      // applyDate:"",
      // reportDate:"",
      // confirmDate:"",
      // reportDoctorId:"",
      // reportDoctorName:"",
      // confirmDoctorId:"",
      // confirmDoctorName:"",
      // reportPdfUrl:"",
      // reportImageUrl:"",
      // reportItemList:[
      //   {itemName:"",
      //   txtVal:"",
      //   pnFlag:"",
      //   reference:""},
      //   {itemName:"",
      //   txtVal:"",
      //   pnFlag:"",
      //   reference:""},
      //   {itemName:"",
      //   txtVal:"",
      //   pnFlag:"",
      //   reference:""}]
  },
},
  onLoad(options) {
    this.data.reportInfo=JSON.parse(options.report)
    this.getList()
  },
  getList(){
    // my.request({
    //   url: 'https://httpbin.org/post',
    //   method: 'POST',
    //   data: {
    //    registerId:this.data.reportInfo.registerId,
    //    name:this.data.reportInfo.name,
    //    registerNumber:this.data.reportInfo.registerNumber
    //   },
    //   dataType: 'json',
    //   success: function(res) {
    //     that.setData({
    //       reportInfo:res.data
    //     })
    //   },
    //   fail: function(res) {
    //     my.showToast({
    //       content:res.Msg
    //     })
    //   }
    // });
    // this.data.reportInfo={
      // recordId:"11-1",
      // cardNum:"24235325436436",
      // userName:"张三",
      // userSex:"男",
      // userAge:"22",
      // diagnosis:"正常",
      // departmentId:"24235325",
      // departmentName:"耳鼻喉科",
      // itemName:"乙肝两对半",
      // applyDoctorId:"24235325",
      // applyDoctorName:"马医生",
      // applyDate:"2020-12-31 14:00",
      // reportDate:"2020-12-31 15:00",
      // confirmDate:"2020-12-31 16:00",
      // reportDoctorId:"24235321",
      // reportDoctorName:"田医生",
      // confirmDoctorId:"242353222",
      // confirmDoctorName:"田医生",
      // reportPdfUrl:"https://gw.alipayobjects.com/os/bmw-prod/94345b09-6ad5-4b0a-9ad7-c55fb09619aa.pdf",
      // reportImageUrl:"https://gw.alipayobjects.com/mdn/rms_6c25e6/afts/img/A*H_rWQLPOkqwAAAAAAAAAAAAAARQnAQ",
      // reportItemList:[
      //   {itemName:"白细胞",
      //   txtVal:"13",
      //   pnFlag:"NORMAL",
      //   reference:"3.5~9.5"},
      //   {itemName:"淋巴细胞绝对值",
      //   txtVal:"3.95",
      //   pnFlag:"HIGH",
      //   reference:"3.5~9.5"},
      //   {itemName:"红细胞",
      //   txtVal:"12.45",
      //   pnFlag:"LOW",
      //   reference:"3.8~5.1"}]
    // }
},
openPDF(){
  my.downloadFile({
  // 示例 url，并非真实存在
      url: this.data.reportInfo.url,
      success({ apFilePath }) {
        my.hideLoading();
        my.openDocument({
          filePath: apFilePath,
          fileType: 'pdf',
          success: (res) => {
            console.log('open document success')
            }
          })
        }
      })
},
openIMG(){
  my.previewImage({
      current: 0,
      urls: [this.data.reportInfo.reportImageUrl],
    });
}
});
