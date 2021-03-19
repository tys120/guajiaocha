import arrList from "./address.js"
Page({
  data: {
    value: [0, 0, 0], // 当前组件的结果值，记录的各列索引
    addressList: arrList, // 所有的地址信息数据
    userInfo:{
      name:'',
      cardNum:"",
      type:null,
      sex:"",
      birthDay:"",
      idCardNo:"",
      phoneNumber:"",
      balance:"0",
      isDefault:0
    },
    visible:false,
    sexIndex:0,
    startTime:"",
    marrayIndex:0,
    sexList: [
      {
        id: 0,
        name: '男',
      },
      {
        id: 1,
        name: '女',
      }
    ],
    marrayList: [
      {
        id: 0,
        name: '未婚',
      },
      {
        id: 1,
        name: '已婚',
      },
      {
        id: 2,
        name: '保密',
      },
    ],
    from:true,
    isReset:true
  },
  onLoad(options){
    if(options.userInfo){
      this.data.userInfo=JSON.parse(options.userInfo)
      this.data.from=false
      this.setData({
        isReset:false,
        startTime:options.userInfo.birthDay
      })
    }else{
      // this.data.userInfo.sex=this.data.sexList[this.data.sexIndex].name
      this.setData({ userInfo:this.data.userInfo });
    }
  },
  deleteData(){
    // my.request({
    //   url: 'https://httpbin.org/patient/delete',
    //   method: 'GET',
    //   data: {
    //     id:this.data.userInfo.id
    //   },
    //   dataType: 'json',
    //   success: function(res) {
    //    
    //   },
    //   fail: function(res) {
    //     my.showToast({
    //       content:res.Msg
    //     })
    //   }
    // });
     my.showToast({
      type: 'success',
      content: "删除成功",
      duration: 2000,
      success: () => {
        my.navigateBack();
      },
    });
  },
  bindInput(e){
    var type=e.target.dataset.type
    if(type==="name"){
      this.data.userInfo.name= e.detail.value.trim()
    }else if(type==="tel"){
      this.data.userInfo.phoneNumber= e.detail.value.trim()
    // }else if(type==="birth"){
    //   this.data.userInfo.birthDay= e.detail.value.trim()
    }else if(type==="number"){
      this.data.userInfo.cardNum= e.detail.value.trim()
      this.data.userInfo.birthDay= this.data.userInfo.cardNum.substring(6,10)+"-"+this.data.userInfo.cardNum.substring(10,12)+"-"+this.data.userInfo.cardNum.substring(12,14)
    }else if(type==="contentName"){
      this.data.userInfo.contentName= e.detail.value.trim()
    }else if(type==="contentTel"){
      this.data.userInfo.contentTel= e.detail.value.trim()
    }
	  this.setData({ userInfo:this.data.userInfo });
  },
  onSubmit(e) {
    var userName = this.data.userInfo.name;
    var mobile = this.data.userInfo.phoneNumber;
    var cardNum = this.data.userInfo.cardNum;
    if (userName.length===0) {
      my.showToast({
        content: '请输入用户名',
        duration: 1000
      })
      return false
    } else if (userName.length<2||userName.length>10) {
      my.showToast({
        content: '请输入2-10个字的姓名',
      })
      return false
    } else if (mobile == '') {
      my.showToast({
        content: '手机号不能为空',
      })
      return false
    } else if (mobile.length != 11) {
      my.showToast({
        content: '手机号长度有误！',
        duration: 1500
      })
      return false;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    var numberReg=/^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;
    if (!myreg.test(mobile)) {
      my.showToast({
        content: '手机号有误！',
        duration: 1500
      })
      return false;
    }
    if (!numberReg.test(cardNum)) {
      my.showToast({
        content: '身份证号码有误！',
        duration: 1500
      })
      return false;
    }
    this.data.userInfo.balance="0"
    if(this.data.userInfo.isDefault===1){
      my.setStorage({
        key: 'default',
        data: this.data.userInfo,
      });
    }
    console.log(this.data.userInfo)
    var str=""
    let url=""
    if(this.data.from){
      url="/patient"
      // senddata={
      //   address: this.patientInfo.address,
      //   cellphone: this.patientInfo.cellphone,
      //   contactMobile: this.patientInfo.contact_mobile,
      //   contactName: this.patientInfo.contact_name,
      //   idNumber: this.patientInfo.id_number,
      //   email: this.patientInfo.email,
      //   isDefault: this.patientInfo.is_default,
      //   name: this.patientInfo.name,
      //   sex: this.patientInfo.sex,
      //   maritalStatus:this.patientInfo.maritalStatus,
      //   relation:this.patientInfo.gxStatus,
      // }
      str="添加成功"
    }else{
      url="/patient/update"
      // senddata={
      //   address: this.patientInfo.address,
      //   cellphone: this.patientInfo.cellphone,
      //   contactMobile: this.patientInfo.contact_mobile,
      //   contactName: this.patientInfo.contact_name,
      //   idNumber: this.patientInfo.id_number,
      //   email: this.patientInfo.email,
      //   isDefault: this.patientInfo.is_default,
      //   name: this.patientInfo.name,
      //   sex: this.patientInfo.sex,
      //   maritalStatus:this.patientInfo.maritalStatus,
      //   relation:this.patientInfo.gxStatus,
      // }
      str="修改成功"
    }
    // my.request({
    //   url: url,
    //   method: 'POST',
    //   data: senddata,
    //   success: function(res) {
    //    
    //   },
    //   fail: function(res) {
    //     my.showToast({
    //       content:res.Msg
    //     })
    //   }
    // });
     my.showToast({
      type: 'success',
      content: str,
      duration: 2000,
      success: () => {
        my.navigateBack();
      },
    });
    
  },
  bindObjPickerChange(e) {
    this.setData({
      sexIndex: e.detail.value,
    });
    this.data.userInfo.sex=this.data.sexList[this.data.sexIndex].name
      this.setData({
        userInfo: this.data.userInfo
      })
  },
  switchChange(e) {
    this.data.userInfo.isDefault=e.detail.value
      this.setData({
        userInfo: this.data.userInfo
      })
  },
  bindmaryPickerChange(e) {
    this.setData({
      marrayIndex: e.detail.value,
    });
    this.data.userInfo.marrary=this.data.marrayList[this.data.marrayIndex].name
      this.setData({
        userInfo: this.data.userInfo
      })
  },
  chooseAddress(){
    this.setData({
      visible:true
    })
  },
  onShow: function(){
    if(this.data.isReset){
      let newObj={name:'', sex:'男',isDefault:1,marrary:"未婚",}
      this.setData({
        userInfo:newObj,
        sexIndex:0,
        marrayIndex:0
      })
    }
  },
  onChange(e) {
      let currentValue = e.detail.value;
      let oldValue = this.data.value;
      let resultValue = [];
      if (currentValue[0] != oldValue[0]) {
        resultValue = [currentValue[0], 0, 0];
      } else if (currentValue[1] != oldValue[1]) {
        resultValue = [currentValue[0], currentValue[1], 0];
      } else {
        resultValue = currentValue;
      }
      this.setData({
        value: resultValue
      });
    },
    /**
     * 点击取消操作，返回cancel操作，value为空，不返回任何值
     */
    clickCancel() {
      this.setData({
        visible:false
      })
    },
    /**
     * 点击确定操作，根据当前结果值，返回对应的name
     */
    clickConfirm() {
      // 遍历当前结果值，根据当前结果值索引，拿到地址数据
      let addressList = this.data.addressList;
      let value = this.data.value;
      let province = addressList[value[0]].name; // 省
      let city = addressList[value[0]].sublist[value[1]].name; // 市
      let county = addressList[value[0]].sublist[value[1]].sublist[value[2]].name; // 区
      this.data.userInfo.address=province+city+county
      this.setData({
        userInfo: this.data.userInfo
      })
      this.setData({
        visible:false
      })
    },
    datePicker(ev) {
    my.datePicker({
      currentDate:this.data.startTime,
      success: (res) => {
        this.data.userInfo.birthDay=res.date
        this.setData({
          userInfo:this.data.userInfo
        })
      },
    });
  },
});