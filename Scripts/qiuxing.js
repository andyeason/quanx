//2023年12月16日 23:18:43
// ^https?:\/\/qiuxinkaifa\.com\/index\.php\/Api\/activity\/StarDetail
// 解锁球星数据
var body = $response.body; 
//console.log(`解锁球星数据前----: ` + body);
var url = $request.url;
if (url.includes("Activity")) {
	body = body.replace("\"pubver\":0","\"pubver\":2").replace("\"pubverTeam\":0","\"pubverTeam\":3");
}else{
	body = body.replace("\"pubver\":0","\"pubver\":3").replace("\"public1\":0","\"public1\":3").replace("\"oldver\":0","\"oldver\":3");
}
//console.log(`解锁球星数据后----: ` + body);
$done(body); 