Page({
  data: {
    userInfo:[{
      name:'兔兔',
      idNumber:"210211199505012916",
      type:null,
      sex:"男",
      birthDay:"2020-12-12",
      idCardNo:"511123199111130532",
      cellphone:"17311351991",
      balance:"0"
      // tel:'17741155570',
      // sex:'男',
      // isDefault:true,
      // email:"751000222@qq.com",
      // marrary:"未婚",
      // number:"210211197705032456",
      // address:"辽宁省大连市甘井子区",
      // contentName:"天天",
      // contentTel:"15565458533"
    },{
      name:'哦哦',
      idNumber:"210211199505012916",
      type:null,
      sex:"男",
      birthDay:"2020-12-12",
      idCardNo:"511123199111130532",
      cellphone:"17311351991",
      balance:"0"
      // name:'哦哦',
      // tel:'17741155570',
      // sex:'男',
      // isDefault:false,
      // email:"751000222@qq.com",
      // marrary:"未婚",
      // number:"210211197705032456",
      // address:"辽宁省大连市甘井子区",
      // contentName:"天天",
      // contentTel:"15565458533"
    },{
      name:'哈哈',
      idNumber:"210211199505012916",
      type:null,
      sex:"男",
      birthDay:"2020-12-12",
      idCardNo:"511123199111130532",
      cellphone:"17311351991",
      balance:"0"
      // name:'哈哈',
      // tel:'17741155570',
      // sex:'男',
      // isDefault:false,
      // email:"751000222@qq.com",
      // marrary:"未婚",
      // number:"210211197705032456",
      // address:"辽宁省大连市甘井子区",
      // contentName:"天天",
      // contentTel:"15565458533"
    },],
    obj:{}
  },
  onLoad(options) {
    // console.log(options)
    this.getPatList()
    this.data.obj=options
  },
  onItemClick(ev) {
    // console.log(ev.target.dataset.info)
    // my.setStorage({
    //   key: 'default',
    //   data: ev.target.dataset.info
    // });
    my.navigateTo({
        url: '/pages/consultation/consultationDescribe/consultationDescribe?options='+JSON.stringify(this.data.obj)+"&cardInfo="+JSON.stringify(ev.target.dataset.info)
      });
 },
 getPatList(){
   // my.request({
    //   url: 'https://httpbin.org/post',
    //   method: 'GET',
    //   data: {
    //     openid:my.getStorage({key: 'openid'});
    //   },
    //   dataType: 'json',
    //   success: function(res) {
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
 }
});
