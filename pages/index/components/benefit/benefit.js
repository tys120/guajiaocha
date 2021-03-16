import { tracertHome } from '../../../../utils/tracert'

Component({
  mixins: [],
  data: {},
  props: {},
  onShow() {
    tracertHome.expo('c37413')
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    tapBanner() {
      tracertHome('c37413.d75486_N')
    }
  },
});
