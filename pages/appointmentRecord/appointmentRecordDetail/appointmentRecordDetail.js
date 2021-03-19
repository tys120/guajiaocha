Page({
  data: {
    info:{
      regKind:'',
      status:'',
      payMode:"",
      source:"",
      regTime:"",
      visitDate:"",
      doctorName:"",
      price:null
    }
  },
  onLoad(options) {
    this.data.info=JSON.parse(options.info)
    console.log(this.data.info)
  },
  btnSub(){
    
  }
});
