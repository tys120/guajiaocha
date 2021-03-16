import { tracertRoute } from '../../utils/tracert'

Component({
  mixins: [],
  // start end upbus offbus stagement 
  data: {
    spread: false,
    steps: [
      {
        time: '09:00',
        name: '良渚',
        start: true // 始发站
      },
      {
        time: '09:00',
        name: '和谐站'
      },
       {
        time: '09:05',
        name: '富强站',
        upbus: true, // 上车
      },
      {
        time: '09:20',
        name: '德力西大厦',
        stagement: true, // 途径站
      },
      {
        time: '09:45',
        name: '天目山路',
        stagement: true,
      },
      {
        time: '09:55',
        name: '萧山机场',
        offbus: true // 下车
      },
      {
        time: '10:00',
        name: '文明站',
      },
      {
        time: '10:10',
        name: '巴拉巴拉',
        end: true // 终点站
      }
    ]
  },
  props: {},
  didMount() {
    if (this.props.spread) {
      this.setData({
        spread: true
      })
    }
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    spread() {
      tracertRoute.click('c37420.d75497')
      this.setData({
        spread: true
      })
    }
  },
});
