// 

if (!$response.body) {
  $done({});
}
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("mod=banners")) {
  if (obj?.data) {
	obj.data = [];
  }
}
if (url.includes("mod=config")) {
  if (obj?.data) {
	delete obj.data.modalNotice;

  }
}

//if (url.includes("api.u51.com/externalgateway/api/v1/configuration-items/parent/gjBottomCfg")) {
//  obj?.configParentList[0]?.parentConfigItemList[0]?.itemMap.forEach(item => {
//  delete item.shop; 
//});
//  obj?.configParentList[0]?.parentConfigItemList[1]?.itemMap.forEach(item => {
//  delete item.shop; 
//  delete item.shop_AN1; 
//  delete item.shop_AN2; 
//  delete item.shopSelected; 
//});
//}



body = JSON.stringify(obj);
$done({body});