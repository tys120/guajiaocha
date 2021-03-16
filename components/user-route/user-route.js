Component({
  mixins: [],
  data: {
    from: '蚂蚁z空间dd',
    dest: '富士康科技集团'
  },
  props: {
    from: '蚂蚁z空间',
    dest: '富士康科技集团'
  },
  didMount() {
    const { from, dest } = this.props;

  },
  didUpdate(prevProps) {
    const { from, dest } = this.props;
    if (from != prevProps.from || dest != prevProps.dest) {
      this.setData({
        from,
        dest
      })
    }
  },
  didUnmount() {},
  methods: {
    onSwitch() {
      const { from, dest } = this.data;
      this.setData({
        from: dest,
        dest: from
      });
      const { onSwitch } = this.props;
      onSwidth && onSwitch();
    }
  },
});
