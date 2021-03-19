Page({
  data: {
    userInfo:[
    //   {
    //   name:'兔兔',
    //   cardNum:"210211199505012916",
    //   type:null,
    //   sex:"男",
    //   birthDay:"2020-12-12",
    //   idCardNo:"511123199111130532",
    //   phoneNumber:"17311351991",
    //   balance:"0"
    //   // tel:'17741155570',
    //   // sex:'男',
    //   // isDefault:true,
    //   // email:"751000222@qq.com",
    //   // marrary:"未婚",
    //   // number:"210211197705032456",
    //   // address:"辽宁省大连市甘井子区",
    //   // contentName:"天天",
    //   // contentTel:"15565458533"
    // },{
    //   name:'哦哦',
    //   cardNum:"210211199505012916",
    //   type:null,
    //   sex:"男",
    //   birthDay:"2020-12-12",
    //   idCardNo:"511123199111130532",
    //   phoneNumber:"17311351991",
    //   balance:"0"
    //   // name:'哦哦',
    //   // tel:'17741155570',
    //   // sex:'男',
    //   // isDefault:false,
    //   // email:"751000222@qq.com",
    //   // marrary:"未婚",
    //   // number:"210211197705032456",
    //   // address:"辽宁省大连市甘井子区",
    //   // contentName:"天天",
    //   // contentTel:"15565458533"
    // },{
    //   name:'哈哈',
    //   cardNum:"210211199505012916",
    //   type:null,
    //   sex:"男",
    //   birthDay:"2020-12-12",
    //   idCardNo:"511123199111130532",
    //   phoneNumber:"17311351991",
    //   balance:"0"
    //   // name:'哈哈',
    //   // tel:'17741155570',
    //   // sex:'男',
    //   // isDefault:false,
    //   // email:"751000222@qq.com",
    //   // marrary:"未婚",
    //   // number:"210211197705032456",
    //   // address:"辽宁省大连市甘井子区",
    //   // contentName:"天天",
    //   // contentTel:"15565458533"
    // },
  ]
  },
  onLoad() {
    this.getPatList()
    
    // this.setData({
    //   userInfo:this.data.userInfo
    // })
  },
  getPatList(){
    let that=this
    this.setData({
      userInfo:this.data.userInfo
    })
    this.data.userInfo.forEach(item => {
      item.birthDay= item.cardNum.substring(6,10)+"-"+item.cardNum.substring(10,12)+"-"+item.cardNum.substring(12,14)
    });
   // my.request({
    //   url: 'https://httpbin.org/patient/list',
    //   method: 'GET',
    //   data: {
    //     openid:my.getStorage({key: 'openid'});
    //   },
    //   dataType: 'json',
    //   success: function(res) {
    //      res.data.data.birthDay= res.data.data.cardNum.substring(6,10)+"-"+res.data.data.cardNum.substring(10,12)+"-"+res.data.data.cardNum.substring(12,14)
    //     this.setData({
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
  onItemClick(ev) {
   my.navigateTo({
      url: '/pages/management/modifyManagement/modifyManagement?userInfo='+JSON.stringify(ev.target.dataset.info)
    });
 },
 onTest(ev){
   //TODO: 添加就诊人信息
  if(ev.target.dataset.type==="addPeople"){
    my.navigateTo({
      url: '/pages/management/modifyManagement/modifyManagement'
    });
  }else{
    my.navigateBack();
  }
 }
});
