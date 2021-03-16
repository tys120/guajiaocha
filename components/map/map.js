Component({
  mixins: [],
  data: {
    polyline: [{
      points: [{
        longitude: 120.131441,
        latitude: 30.279383
      }, {
        longitude: 120.128821,
        latitude: 30.278200
      }, {
        longitude: 120.131618,
        latitude: 30.277600
      }, {
        longitude: 120.132520,
        latitude: 30.279393
      }, {
        longitude: 120.137517,
        latitude: 30.279383
      }],
      color: "#00BA1FDD",
      width: 5,
      dottedLine: false
    }],
    markers: [
      {
        iconPath: "https://gw.alipayobjects.com/mdn/rms_815f8a/afts/img/A*PMzsRpZnO-4AAAAAAAAAAABkARQnAQ",
        id: 18,
        longitude: 120.131441,
        latitude: 30.279383,
        width: 16,
        height: 16,
        anchorX: 0.5,
        anchorY: 0.2,
        iconAppendStr: '天目山路',
        iconAppendStrColor: '#000'
      },
      {
        iconPath: "https://gw.alipayobjects.com/mdn/rms_815f8a/afts/img/A*-DPTTKDTsq4AAAAAAAAAAABkARQnAQ",
        id: 10,
        longitude: 120.128821,
        latitude: 30.278200,
        width: 12.5,
        height: 12.5,
        anchorX: 0.5,
        anchorY: 0.2,
        iconAppendStr: '天目山路',
        iconAppendStrColor: '#000'
       
      },
      {
        iconPath: "https://gw.alipayobjects.com/mdn/rms_815f8a/afts/img/A*-DPTTKDTsq4AAAAAAAAAAABkARQnAQ",
        id: 10,
        longitude: 120.131618,
        latitude: 30.277600,
        width: 12.5,
        height: 12.5,
        anchorX: 0.5,
        anchorY: 0.2,
        iconAppendStr: '天目山路',
        iconAppendStrColor: '#000'
      },
      {
        iconPath: "https://gw.alipayobjects.com/mdn/rms_815f8a/afts/img/A*-DPTTKDTsq4AAAAAAAAAAABkARQnAQ",
        id: 10,
        longitude: 120.132520,
        latitude: 30.279393,
        width: 12.5,
        height: 12.5,
        anchorX: 0.5,
        anchorY: 0.2,
        iconAppendStr: '天目山路',
        iconAppendStrColor: '#000'
      },
      {
        iconPath: "https://gw.alipayobjects.com/mdn/rms_815f8a/afts/img/A*a9ahTaVL5gIAAAAAAAAAAABkARQnAQ",
        id: 11,
        longitude: 120.137517,
        latitude: 30.279383,
        width: 16,
        height: 16,
        anchorX: 0.5,
        anchorY: 0.2,
        iconAppendStr: '天目山路',
        iconAppendStrColor: '#000'
      },

    ],
  },
  props: {},
  didMount () {
    if (this.props.controls) {
      this.setData({
        controls: [{
          id: 5,
          iconPath: '/icons/ticket.png',
          position: {
            left: 300,
            top: 35,
            width: 50,
            height: 50
          },
          clickable: true
        }]
      })
    }
   },
  didUpdate () { },
  didUnmount () { },
  
  methods: {
    regionchange() {

    },
  },
});
