Component({
  mixins: [],
  data: {
    tabs: [
      {
        date: '6月2日今天',
        time: '08：00',
        status: "已出行",
        interval: "早",
        cartype: "s100",
        from: "良渚",
        to: "萧山机场",
        start: "德力西大楼",
        startat: "14：20",
        end: "萧山机场",
        endat: "16：20",
        //根据是否出行，展示不同颜色状态的卡片
        iscolorful: false
      },
      {
        date: '6月2日今天',
        time: '08：00',
        status: "待出行",
        interval: "早",
        cartype: "s100",
        from: "良渚",
        to: "萧山机场",
        start: "德力西大楼1",
        startat: "14：20",
        end: "萧山机场",
        endat: "16：20",
        //根据是否出行，展示不同颜色状态的卡片
        iscolorful: true
      },
      {
        date: '6月2日今天',
        time: '08：00',
        status: "已出行",
        interval: "早",
        cartype: "s100",
        from: "良渚",
        to: "萧山机场",
        start: "德力西大楼2",
        startat: "14：20",
        end: "萧山机场",
        endat: "16：20",
        //根据是否出行，展示不同颜色状态的卡片
        iscolorful: false
      },
    ],
  },
  props: {},
  didMount () { },
  didUpdate () { },
  didUnmount () { },
  methods: {},
});
