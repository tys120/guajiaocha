import { tracertSearch } from '../../utils/tracert'
import Store from './store'

Page(Store.register({
  data: {
    localName:'',
     Departmentlist: [
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '在线挂号',
       path:'/pages/consultation/consultation'
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '在线问诊',
       path:'/pages/online/online'
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '门诊缴费',
       path:'/pages/pay/pay'
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '自助排队',
       path:'/pages/lineUp/lineUp'
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '门诊简历',
       path:'/pages/resume/resume'
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '就诊记录',
       path:'/pages/record/record'
     }
   ],
   hospitlist: [
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '预约床位',
       path:'/pages/appointment/appointment'
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '交预缴金',
       path:'/pages/payment/payment'
     }
   ],
   physicallist: [
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '预约体检',
       path:'/pages/physical/physical'
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '体检报告',
       path:'/pages/examinationReport/examinationReport'
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '注意事项',
       path:'/pages/careful/careful'
     }
   ],
  },
  onLoad() {
    tracertSearch.logPv()
  },
  onShow() {
    this.checkCard()
    tracertSearch.expo('c37428')
  },
  checkCard(){
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
  onItemClickOne(ev) {
    this.checkCard()
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
      my.navigateTo({url: this.data.Departmentlist[ev.detail.index].path });
    }
 },
 onItemClickTwo(ev) {
    this.checkCard()
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
    my.navigateTo({url: this.data.hospitlist[ev.detail.index].path });
    }
 },
 onItemClickThree(ev) {
    this.checkCard()
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
    my.navigateTo({url: this.data.physicallist[ev.detail.index].path });
    }
 },
}));
