//2023年12月16日 23:18:43
// 解锁球星数据
var body = $response.body; 
body = body.replace("\"pubver\":0","\"pubver\":2").replace("\"public1\":0","\"public1\":3").replace("\"oldver\":0","\"oldver\":3").replace("\"pubverTeam\":0","\"pubverTeam\":3");
$done(body); 