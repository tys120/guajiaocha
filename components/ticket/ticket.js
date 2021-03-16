import fmtEvent from 'mini-antui/es/_util/fmtEvent';
import { tracertHome, tracertList } from '../../utils/tracert'
import { connect } from 'herculex';

Component(connect({
  mapStateToProps: ['cancelCustomerVisible']
})(
  {
  mixins: [],
  data: {
    status: '',
    step: 5,
    cancelCustomerVisible: false,
  },
  props: {
    type: 'start',
    showTopExtra: false,
    onTicketClick: () => {}
  },
 
  didMount() {
    const { type } = this.props;
    this.onUpdateStatus(type);
  },
  didUpdate(prevProps) {
    const { type } = this.props;
    if (type !== prevProps.type) {
      this.onUpdateStatus(type);
    }
  },
  didUnmount() {},
  methods: {
    goBuyTicket() {
      tracertList.click('c37434.d75523')
      my.navigateTo({
        url: '/pages/order-confirm/order-confirm'
      });
    }, 
    onTicketClick(e){
      tracertHome.click('c37412.d75484')
      const event = fmtEvent(this.props, e);
      this.props.onTicketClick(e);
      if (this.props.go === 'ticket') {
         my.navigateTo({
          url: '/pages/ticket-detail/ticket-detail'
        });
      }
      if (this.props.go === 'route') {
         my.navigateTo({
          url: '/pages/ticket-detail/ticket-detail'
        });
      }
    },
    onCancel () {
      tracertList.click('c37434.d75522')
      this.commit('openCancelModal', {
        cancelCustomerVisible: true
      })
    },
    onUpdateStatus(type) {
      let status = '';
      if (type === 'finish') {
        status = '已结束';
      } else if (type === 'start') {
        status = '待出行';
      } else if (type === 'refund') {
        status = '已退票';
      } else if (type === 'ready') {
        status = '待成行';
      } else if (type === 'already') {
        status = '已成行';
      } else if (type === 'canceled') {
        status = '已取消';
      }

      this.setData({
        status
      });
    },
  },
}
));
