import { tracertHome } from '../../utils/tracert'
// import Store from './store'
Page({
  data: {
    error: false,
    none: false,
    localName:"",
    background: ['https://m.qpic.cn/psc?/V52Vp3v525yka14ThzWR4Oqr9H3ezIPb/bqQfVz5yrrGYSXMvKr.cqTvYZT.Jjcf4Fsvk1kvJOtYhZk6m2qCTw503rBeorJM8WcskiIX.Sk2nQNVLlyUiOM6wpfBVsGRfbrj5btcDeX8!/b&bo=1AOAAgAAAAABB3U!&rf=viewer_4&t=5','https://m.qpic.cn/psc?/V52Vp3v525yka14ThzWR4Oqr9H3ezIPb/bqQfVz5yrrGYSXMvKr.cqTvYZT.Jjcf4Fsvk1kvJOtYhZk6m2qCTw503rBeorJM8WcskiIX.Sk2nQNVLlyUiOM6wpfBVsGRfbrj5btcDeX8!/b&bo=1AOAAgAAAAABB3U!&rf=viewer_4&t=5'],
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
       text: '报告查询',
       path:"/pages/testReport/testReport",
       icon:"https://gw.alipayobjects.com/mdn/rms_6c25e6/afts/img/A*jNmYR712zPcAAAAAAAAAAAAAARQnAQ"
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '在线充值',
       path:"/pages/hospitalNew/hospitalNew",
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
      balance:""
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
      path:"",
      icon:"https://gw.alipayobjects.com/mdn/rms_6c25e6/afts/img/A*RYZXRolQiHgAAAAAAAAAAAAAARQnAQ"
    },{
      title:"就诊记录",
      path:"",
      icon:"https://gw.alipayobjects.com/mdn/rms_6c25e6/afts/img/A*ZtbkTLh9JPcAAAAAAAAAAAAAARQnAQ"
    },{
      title:"缴费查询",
      path:"/pages/paymentRecord/paymentRecord",
      icon:"https://gw.alipayobjects.com/mdn/rms_6c25e6/afts/img/A*5ZJ4S44IchQAAAAAAAAAAAAAARQnAQ"
    },{
      title:"充值查询",
      path:"",
      icon:"https://gw.alipayobjects.com/mdn/rms_6c25e6/afts/img/A*TQ7CQbaET5AAAAAAAAAAAAAAARQnAQ"
    }]
  },
  onLoad() {
    // this.getUserInfo()
    // this.getmind()
  },
  onShow() {
    tracertHome.expo('c37411')
    this.getUserInfo()
    this.getmind()
    let that=this
    my.getStorage({
      key: 'default',
      success(res) {
        that.setData({
          localName:res.data.name
        })
        },
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
    let uf={
      cardNum:"2021002103662702",
      type:null,
      name:"张三",
      sex:"男",
      birthDay:"2020-12-12",
      idCardNo:"511123199111130532",
      phoneNumber:"17311351991",
      balance:"0"
    }
    this.setData({
      userInfo:uf
    })
  },
  getmind(){
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
  },
  goMycard(){
    my.navigateTo({
      url: '/pages/management/management'
    });
  },
  chooseTime(ev){
    if(ev.target.dataset.index===2){
      let path=this.data.service[ev.target.dataset.index].path
      my.navigateTo({
        url:path
      })
    }
    // console.log(ev.target.dataset.index,ev)
  }
});
