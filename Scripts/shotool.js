let body = $response.body;
let obj = JSON.parse(body);

console.log("原始数据：", obj);

obj.data.vipExpire = "2099-12-31 10:30:00";

console.log("修改后的数据：", obj);

$done({body: JSON.stringify(obj)});