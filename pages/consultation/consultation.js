Page({
  data: {
    activeTab: 0,
    tabs: [
      { title: '内科', anchor: 'a', group:[{title:'呼吸与重症学科',id:'1'}]},
      { title: '内镜室', anchor: 'b' , group:[{title:'赵菲菲',id:'1',des:"不限",avtor:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png"},{title:'秦晓川',id:'2',des:"不限",avtor:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png"}]},
      { title: '眼科', anchor: 'c', group:[{title:'曹小丽',id:'1',des:"中级",avtor:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png"},{title:'郑利利',id:'2',des:"副高",avtor:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png"}] },
      { title: '脑病二科', anchor: 'd', group:[{title:'买小磊',id:'1',des:"中级",avtor:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png"},{title:'王苗盛',id:'2',des:"师级助理",avtor:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png"}] },
      { title: '肺病科门诊', anchor: 'e' , group:[{title:'王金海',id:'1',des:"副高",avtor:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png"}]},
      { title: '脾胃科', anchor: 'f' , group:[{title:'雷建军',id:'1',des:"中级",avtor:"https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png"}]},
    ],
    items2:[]
  },
  onLoad(){
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
    // console.log(this.data.items2[target.index].id)
    let id=this.data.items2[target.index].id
    my.navigateTo({url:  "/pages/consultation/doctorIndex/doctorIndex?id="+id});
    // if(ev.target){
    //   console.log(ev.target.dataset.filed)
    // }else{
    //   console.log(ev.detail.index)
    // }
  }
});