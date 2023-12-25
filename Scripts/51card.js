// 去除首页横幅广告，去除我的广告（只保留设置，个人资料）

if (!$response.body) {
  $done({});
}
const url = $request.url;
let obj = JSON.parse($response.body);

if (obj?.operationResourceDTO) {
  obj.operationResourceDTO = [];
}

if (url.includes("api.u51.com/generic-config-gateway/api")) {
  if (obj?.meTabConfigExts) {
    let reserve = ['设置']
    obj.meTabConfigExts = obj.meTabConfigExts.filter(item => reserve.includes(item.meTabConfigs[0].title));
  }
}

if (url.includes("api.u51.com/externalgateway/api/v1/configuration-items/parent/gjBottomCfg")) {
  obj?.configParentList[0]?.parentConfigItemList[0]?.itemMap.forEach(item => {
  delete item.shop; 
});
  obj?.configParentList[0]?.parentConfigItemList[1]?.itemMap.forEach(item => {
  delete item.shop; 
  delete item.shop_AN1; 
  delete item.shop_AN2; 
  delete item.shopSelected; 
});
}



body = JSON.stringify(obj);
$done({body});