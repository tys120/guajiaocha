import { tracertHome } from '../../utils/tracert'
var app = getApp()
// import Store from './store'
Page({
  data: {
    error: false,
    none: false,
    showCard:false,
    localName:"",
    background: ['https://gw.alipayobjects.com/mdn/rms_6c25e6/afts/img/A*vs1SRqhN0VkAAAAAAAAAAAAAARQnAQ'],
    indicatorDots: false,
    autoplay: true,
    vertical: false,
    interval: 3000,
    circular: false,
    list55: [
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '预约挂号',
       path:"/pages/consultation/consultation",
       icon:"https://gw.alipayobjects.com/mdn/rms_6c25e6/afts/img/A*HtuYS7IxkswAAAAAAAAAAAAAARQnAQ"
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '诊间缴费',
       path:"/pages/pay/pay",
       icon:"https://gw.alipayobjects.com/mdn/rms_6c25e6/afts/img/A*9O1CRLxD6xoAAAAAAAAAAAAAARQnAQ"
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '检验报告',
       path:"/pages/testReport/testReport",
       icon:"https://gw.alipayobjects.com/mdn/rms_6c25e6/afts/img/A*jNmYR712zPcAAAAAAAAAAAAAARQnAQ"
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '检查报告',
       path:"/pages/inspectionReport/inspectionReport",
       icon:"https://gw.alipayobjects.com/mdn/rms_6c25e6/afts/img/A*hVHuTaGAiOIAAAAAAAAAAAAAARQnAQ"
     }
    ],
    userInfo:{
      cardNum:"",
      type:null,
      name:"",
      sex:"",
      birthDay:"",
      idCardNo:"",
      phoneNumber:"",
      balance:"0"
    },
    remind:{
      orderId:"",
      userName:"",
      timeRange:"",
      doctorName:"",
      depName:"",
      queueNum:""
    },
    service:[{
      title:"预约记录",
      path:"/pages/appointmentRecord/appointmentRecord",
      icon:"https://gw.alipayobjects.com/mdn/rms_6c25e6/afts/img/A*RYZXRolQiHgAAAAAAAAAAAAAARQnAQ"
    },
    // {
    //   title:"就诊记录",
    //   path:"",
    //   icon:"https://gw.alipayobjects.com/mdn/rms_6c25e6/afts/img/A*ZtbkTLh9JPcAAAAAAAAAAAAAARQnAQ"
    // },
    {
      title:"缴费查询",
      path:"/pages/paymentRecord/paymentRecord",
      icon:"https://gw.alipayobjects.com/mdn/rms_6c25e6/afts/img/A*5ZJ4S44IchQAAAAAAAAAAAAAARQnAQ"
    },
    // {
    //   title:"充值查询",
    //   path:"",
    //   icon:"https://gw.alipayobjects.com/mdn/rms_6c25e6/afts/img/A*TQ7CQbaET5AAAAAAAAAAAAAAARQnAQ"
    // }
  ]
  },
  onLoad() {
    // this.getUserInfo()
    // this.getmind()
  },
  onShow() {
    tracertHome.expo('c37411')
    this.getUserInfo()
    this.getmind()
    this.getBasic()
    let that=this
    my.getStorage({
      key: 'default',
      success(res) {
        res.data.birthDay=res.data.cardNum.substring(6,10)+"-"+res.data.cardNum.substring(10,12)+"-"+res.data.cardNum.substring(12,14)
        that.setData({
          localName:res.data.name,
          userInfo:res.data,
          showCard:true
        })
        },
      fail(){
        that.setData({
          showCard:false
        })
      }
    });
  },
  onLottieFailed(e) {
    my.alert({
      content: JSON.stringify(e)
    })
  },
  onItemClick(ev) {
    let that=this
    my.getStorage({
      key: 'default',
      success(res) {
        that.setData({
          localName:res.data.name
        })
        },
    });
    if(this.data.localName.length===0){
        my.confirm({
          title: '提示',
          content: '您还没有填写就诊人信息，是否添加就诊人信息',
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          success: (result) => {
          if(result.confirm){
            my.navigateTo({url: '/pages/management/modifyManagement/modifyManagement'});
          }
          },
        });
      }else{
        let path=this.data.list55[ev.detail.index].path
        my.navigateTo({ url: path })
    }
 },
  getUserInfo(){
    // let uf={
    //   cardNum:"2021002103662702",
    //   type:null,
    //   name:"张三",
    //   sex:"男",
    //   birthDay:"2020-12-12",
    //   idCardNo:"511123199111130532",
    //   phoneNumber:"17311351991",
    //   balance:"0"
    // }
    // this.setData({
    //   userInfo:uf
    // })
    // let that=this
    // let str=""
    // my.getStorage({
    //   key: 'openid',
    //   success: (result) => {
    //     str=result.data
    //   },
    // });

    // my.request({
    //   url: 'https://wx.rzszyy.cn/wechat/api/patient/list',
    //   method: 'GET',
    //   data: {
    //     openid: str
    //   },
    //   dataType: 'json',
    //   success: function(res) {
    //     that.setData({
    //       userInfo:res.data.data
    //     })
    //   },
    //   fail: function(res) {
    //     my.showToast({
    //       content:res.Msg
    //     })
    //   }
    // });
  },
  getmind(){
    // let that=this
    let uf={
      orderId:"1010000002939663",
      userName:"光美",
      timeRange:"2020-12-31 14:00~15:00",
      doctorName:"张医生",
      depName:"口腔科",
      queueNum:"1010000002939663"
    }
    this.setData({
      remind:uf
    })
    // my.request({
    //   url: 'https://httpbin.org/post',
    //   method: 'POST',
    //   data: {
    //     from: '支付宝',
    //     production: 'AlipayJSAPI',
    //   },
    //   dataType: 'json',
    //   success: function(res) {
    //     that.setData({
    //       userInfo:res.data
    //     })
    //   },
    //   fail: function(res) {
    //     my.showToast({
    //       content:res.Msg
    //     })
    //   }
    // });
  },
  goMycard(){
    my.navigateTo({
      url: '/pages/management/management'
    });
  },
  chooseTime(ev){
    // if(ev.target.dataset.index===2){
      let path=this.data.service[ev.target.dataset.index].path
      my.navigateTo({
        url:path
      })
    // }
    // console.log(ev.target.dataset.index,ev)
  },
  getBasic(){
    // my.request({
    //   url: 'https://wx.rzszyy.cn/wechat/api/hospital/page',
    //   method: 'GET',
    //   success: function(res) {
    //     my.setStorage({
    //      key: 'hosID',
    //      data: res.data.data.records[0].id
    //     });
    //     that.setData({
    //       background:res.data.data.imageUrlList
    //     })
    //   },
    //   fail: function(res) {
    //     my.showToast({
    //       content:"出错了"
    //     })
    //   }
    // });
  }
});
