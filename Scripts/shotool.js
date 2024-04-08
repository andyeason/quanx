
// 2024年4月9日 00:08:11
/**
var Q = JSON.parse($response.body);
Q.data.vipExpire = "2099-12-31 23:59:59";
Q.data.nickName = "破解成功";
console.log(JSON.stringify(Q));
$done({body : JSON.stringify(Q)});**/

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
obj.data.vipExpire = "2099-12-31 23:59:59";
obj.data.nickName = "破解成功";
console.log(`课程表解锁----: `+JSON.stringify(obj) );
$done({ body: JSON.stringify(obj) });