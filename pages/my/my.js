
import { tracertMy } from '../../utils/tracert'

Page({
  data: {
    userInfo:{
      name:'',
      tel:'',
      sex:'',
      isDefault:1,
      email:"",
      marrary:"",
      number:"",
      address:"",
      contentName:"",
      contentTel:""
    },
    localName:'',
    serviceList:[
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '缴费记录',
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '住院清单',
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '挂号记录',
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '检验报告',
       path:'/pages/testReport/testReport'
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '检查报告',
       path:'/pages/inspectionReport/inspectionReport'
     },
   ],
   items2:[
       {title:'我的收藏',path:'1'},
       {title:'就诊人管理',path:'/pages/management/management'},
       {title:'来院导航',path:'3'},
       {title:'清理缓存',path:'4'},
     ]
  },
  onLoad() {
    tracertMy.logPv()
    var that=this
    my.getStorage({
      key: 'default',
      success(res) {
         that.setData({
           userInfo:res.data
         })
        },
    });
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
  onShow() {
    this.checkCard()
    tracertMy.expo('c37433')
  },
  searchTo(ev){
    if(ev.target){
      my.navigateTo({url: ev.target.dataset.filed});
    }else{
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
        my.navigateTo({url: this.data.serviceList[ev.detail.index].path});
      }
    }
  }
});