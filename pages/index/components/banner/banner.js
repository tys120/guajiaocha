Component({
  mixins: [],
  data: {
    start: {
      id: 1,
      text: '蚂蚁z空间'
    },
    end: {
      id: 2,
      text: '你要去哪儿?'
    }
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    goStartSelect() {
      my.navigateTo({
        url: '/pages/search/search?type=start'
      });
    },
    goEndSelect() {
      my.navigateTo({
        url: '/pages/search/search?type=end'
      });
    }
  },
});
