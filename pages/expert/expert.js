
Page({
  data: {
    doctorInfo:{
      name:"",
      zhiwei:"",
      sex:'',
      keshi:'',
      workData:'',
      goodAt:'',
      des:'',
      avtor:''
    }
  },
  onLoad(options) {
    this.getDoctorInfo(options.id)
  },
    getDoctorInfo(id){
      if(id!==null){
        this.data.doctorInfo={
          name:"董雪民",
          zhiwei:"脑病科大主任，主治医师",
          sex:'男',
          keshi:'脑病科',
          workData:'2014-05-11',
          goodAt:'擅长治疗急性脑血管病、神经系统病变、内科及其他疾病',
          des:'董雪民，脑病科大主任，主治医师，中华医学会会员，本科学历，毕业于河南省中医学院，汝州市科技拔尖人才，著名中医内科专家。先后在省内外医学核心期刊发表学术论文15余篇，或汝州市科学技术进步奖一等奖1项，二等奖2项，擅长治疗急性脑血管病，神经系统病变，内科及其他疾病。坐诊地点：中风楼一楼，联系电话：13937590588',
          avtor:'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png'
        }
      }
    }
});
