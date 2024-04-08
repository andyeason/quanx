let body = $response.body;
let obj = JSON.parse(body);

obj.data.vipExpire = "2099-12-31 10:30:00";

$done({body: JSON.stringify(obj)});