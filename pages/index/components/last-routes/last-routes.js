import { tracertHome } from '../../../../utils/tracert'
import { connect } from 'herculex'
Component(connect({
  mapStateToProps: []
})(
  {
    mixins: [],
    data: {},
    props: {},
    onShow() {
      tracertHome.expo('c37412')
    },
    didMount() {},
    didUpdate() {},
    didUnmount() {},
    methods: {
      getMore() {
        tracertHome.click('c37412.d75485')
        my.navigateTo({
          url: '/pages/tickets/tickets'
        });
      }
    },
  }
));
