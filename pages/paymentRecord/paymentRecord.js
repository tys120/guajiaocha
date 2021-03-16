Page({
  data: {
    item1: [{
      title: '缴款记录',
      titleIconUrl: 'https://gw.alipayobjects.com/mdn/industry_l/afts/img/A*c1YIRJk2AvcAAAAAAAAAAABkARQnAQ',
      value: '826.00',
      valueUnit: '￥',
      status: '缴款成功',
      statusColor: '#FF6010',
      licensePlate: '860a538625930555684',
      dateTime: '2018-06-03  10:00:00',
      showDetail: false,
      source:"门诊挂号"
    }]
  },
  onLoad() { },
  onClickDetail(val) {
    console.log('click:', val.target.dataset.info);
  }
});