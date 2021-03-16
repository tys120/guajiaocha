import { tracertHome, tracertRouteSearch } from '../../utils/tracert' 


Component({
  mixins: [],
  data: {
    type: 1
  },
  props: {
    // id: 1 // 车票Id 
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    goToDetail() {
      const { origin, go } = this.props;
      if (origin === 'search') {
        tracertRouteSearch.click('c37417.d75493_N')
      }
      if (go === 'ticket') {
         my.navigateTo({
          url: '/pages/ticket-detail/ticket-detail'
        });
      }
      if (go === 'route') {
         my.navigateTo({
          url: '/pages/route-detail/route-detail'
        });
      }
    },
    goBuyTicket() {
      const { origin } = this.props
      if (origin === 'search') {
         tracertRouteSearch.click('c37417.d75509')
      } else {
         tracertHome.click('c37414_N.d75508')
      }
      my.navigateTo({
        url: '../order-confirm/order-confirm'
      });
    },
    goSeeTicket() {
      const { origin } = this.props
      if (origin === 'search') {
         tracertRouteSearch.click('c37417.d75509')
      } else {
        tracertHome.click('c37414_N.d75488')
      }
      
    }
  },
});
