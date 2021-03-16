import { tracertHome } from '../../../../utils/tracert'
import { connect } from 'herculex'

Component(
  connect({
    mapStateToProps: []
  })(
    {
      mixins: [],
      data: {
        tabs: [
          {
            title: '推荐线路',
          },
          {
            title: '幸福上下班',
          },
          { 
            title: '樱花专线'
          },
        
        ],
        activeTab: 0,
      },
      props: {},
      onShow() {
        tracertHome.expo('c37414_N')
      },
      didMount() {},
      didUpdate() {},
      didUnmount() {},
      methods: {
        handleTabClick({ index }) {
        this.setData({
          activeTab: index,
        });
      },
        handleTabChange({ index }) {
          this.setData({
            activeTab: index,
          });
        },
        handlePlusClick() {
          my.alert({
            content: 'plus clicked',
          });
        },
      },
    }
  )
);
