//2023/12/16
// ^https?:\/\/qiuxinkaifa\0.com\/index\.php\/Api\/activity\/StarDetail
// 解锁球星数据
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

var body = $response.body; 
body = body.replace("\"pubver\":0","\"pubver\":3")
$done(body); 