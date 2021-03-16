import { tracertHome } from '../../utils/tracert'
import Store from './store'
Page(Store.register({
  data: {
    error: false,
    none: false,
    background: ['https://m.qpic.cn/psc?/V52Vp3v525yka14ThzWR4Oqr9H3ezIPb/bqQfVz5yrrGYSXMvKr.cqTvYZT.Jjcf4Fsvk1kvJOtYhZk6m2qCTw503rBeorJM8WcskiIX.Sk2nQNVLlyUiOM6wpfBVsGRfbrj5btcDeX8!/b&bo=1AOAAgAAAAABB3U!&rf=viewer_4&t=5','https://m.qpic.cn/psc?/V52Vp3v525yka14ThzWR4Oqr9H3ezIPb/bqQfVz5yrrGYSXMvKr.cqTvYZT.Jjcf4Fsvk1kvJOtYhZk6m2qCTw503rBeorJM8WcskiIX.Sk2nQNVLlyUiOM6wpfBVsGRfbrj5btcDeX8!/b&bo=1AOAAgAAAAABB3U!&rf=viewer_4&t=5'],
    indicatorDots: false,
    autoplay: true,
    vertical: false,
    interval: 3000,
    circular: false,
    list55: [
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '智能导诊',
       path:"/pages/IntelligentGuidance/IntelligentGuidance"
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '就诊指南',
       path:"/pages/medicalGuidance/medicalGuidance"
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '健康科普',
       path:"/pages/health/health"
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '医院新闻',
       path:"/pages/hospitalNew/hospitalNew"
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '医疗保险',
       path:"/pages/medicalInsurance/medicalInsurance"
     },
     {
       icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
       text: '最新文章',
       path:"/pages/articles/articles"
     },
    ],
    specialtyList:[{url:'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',title:'心血管',path:''},{url:'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',title:'心脏专一科',path:''}],
    thumb: [{url:"https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*b-kqQ4RZgsYAAAAAAAAAAABkARQnAQ",tit:'董雪民 脑病科大主任，主治医师',des:"董雪民，脑病科大主任，主治医师，中华医学会会员，本科学历，毕业于河南省中医学院，汝州市科技拔尖人才，著名中医内科专家。先后在省内外医学核心期刊发表学术论文15余篇，或汝州市科学技术进步奖一等奖1项，二等奖2项，擅长治疗急性脑血管病，神经系统病变，内科及其他疾病。坐诊地点：中风楼一楼，联系电话：13937590588",id:'0'},
  {url:"https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*b-kqQ4RZgsYAAAAAAAAAAABkARQnAQ",tit:'董雪民 脑病科大主任，主治医师',des:"董雪民，脑病科大主任，主治医师，中华医学会会员，本科学历，毕业于河南省中医学院，汝州市科技拔尖人才，著名中医内科专家。先后在省内外医学核心期刊发表学术论文15余篇，或汝州市科学技术进步奖一等奖1项，二等奖2项，擅长治疗急性脑血管病，神经系统病变，内科及其他疾病。坐诊地点：中风楼一楼，联系电话：13937590588",id:'1'}],
  },
  onLoad() {
    tracertHome.logPv()
  },
  onshow() {
    tracertHome.expo('c37411')
  },
  onLottieFailed(e) {
    my.alert({
      content: JSON.stringify(e)
    })
  },
  onItemClick(ev) {
    let path=this.data.list55[ev.detail.index].path
     my.navigateTo({ url: path })
 },
 searchTo(ev){
   my.navigateTo({ url: "/pages/expert/expert?id="+ ev.info})
 },
  methods: {
  }
}));
