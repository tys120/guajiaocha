Page({
  data: {
    title: '操作成功',
    subTitle: '',
    type: 'success',
    items: [
      { name: 'success', value: 'success', checked: true },
      { name: 'fail', value: 'fail' },
      { name: 'info', value: 'info' },
      { name: 'warn', value: 'warn' },
      { name: 'waiting', value: 'waiting' },
    ],
  },
  onLoad() {
  },
  goBack() {
    my.navigateTo({
      url: '/pages/newIndex/newIndex'
    });
  },
});