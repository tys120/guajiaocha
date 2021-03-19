Page({
  data: {
    activeTab: 0,
    tabs: [
      { deptName: '内科', anchor: 'a', id:'1',group:[{title:'呼吸与重症学科',id:'1'}]},
      { deptName: '内镜室', anchor: 'b' ,id:'2', group:[{title:'赵菲菲',id:'1',des:"不限",avtor:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png"},{title:'秦晓川',id:'2',des:"不限",avtor:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png"}]},
      { deptName: '眼科', anchor: 'c', id:'3',group:[{title:'曹小丽',id:'1',des:"中级",avtor:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png"},{title:'郑利利',id:'2',des:"副高",avtor:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png"}] },
      { deptName: '脑病二科', anchor: 'd', id:'4',group:[{title:'买小磊',id:'1',des:"中级",avtor:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png"},{title:'王苗盛',id:'2',des:"师级助理",avtor:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png"}] },
      { deptName: '肺病科门诊', anchor: 'e' ,id:'5', group:[{title:'王金海',id:'1',des:"副高",avtor:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png"}]},
      { deptName: '脾胃科', anchor: 'f' , id:'6',group:[{title:'雷建军',id:'1',des:"中级",avtor:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png"}]},
    ],
    items2:[]
  },
  onLoad(){
    this.getTabs()
    this.setData({
      items2:this.data.tabs[this.data.activeTab].group
    })
  },
  onChange(index) {
    this.setData({
      activeTab: index,
    });
    this.setData({
      items2:this.data.tabs[index].group
    })
  },
  // handleChange(index) {
  //   console.log(index)
  //   this.setData({
  //     activeTab: index,
  //   });
  // },
  onItemClick(target){
    // console.log(target.index)
    let id=this.data.tabs[target.index].id
    my.navigateTo({url:  "/pages/consultation/doctorIndex/doctorIndex?id="+id});
    // if(ev.target){
    //   console.log(ev.target.dataset.filed)
    // }else{
    //   console.log(ev.detail.index)
    // }
  },
  getTabs(){
    // my.request({
    //   url: 'https://httpbin.org/department/outpatient',
    //   method: 'GET',
    //   data: {
    //     hospitalId:my.getStorage({key: 'hosID'});
    //   },
    //   dataType: 'json',
    //   success: function(res) {
    //     this.setData({
    //       tabs:resp.data.data
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