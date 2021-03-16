import TracertTa from '@alipay/tracert-ta';

function createTracert(spmBPos) {
  return new TracertTa({
    spmAPos: 'a1712',
    spmBPos,
    bizType: 'CITYSERVICE',
    mdata: {
      isvName: '',
      cityCode: '',
      chInfo: ''
    }
  });
};

// 列表页
export const tracertList = createTracert('b15375')
// 我的 
export const tracertMy = createTracert('b15374')
// 车票详情
export const tracertTicket = createTracert('b15373')
// 车票查询
export const tracertSearch = createTracert('b15370')
// 订单确认
export const tracertOrder = createTracert('b15369')
// 路线详情
export const tracertRoute = createTracert('b15368')
// 发起路线定制页
export const tracertCustomer = createTracert('b15367')
// 路线查询
export const tracertRouteSearch = createTracert('b15366')
// 首页
export const tracertHome = createTracert('b15365')