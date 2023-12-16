//2023年12月16日 23:18:43
// ^https?:\/\/qiuxinkaifa\.com\/index\.php\/Api\/activity\/StarDetail
// 解锁球星数据
var body = $response.body; 
//console.log(`解锁球星数据前----: ` + body);
body = body.replace("\"pubver\":0","\"pubver\":3");
//console.log(`解锁球星数据后----: ` + body);
$done(body); 