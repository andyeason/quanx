/*
小歪微商 微商换头像
2023年12月30日 15:15:12
[rewrite_local]
http://htx.jietuguanjia.com/api/app/userInfo url script-response-body https://raw.githubusercontent.com/andyeason/quanX/main/Scripts/xiaowai.js

[mitm] 

hostname = htx.jietuguanjia.com

*/

var Q = JSON.parse($response.body);
Q.data.isVip = true;//会员
Q.data.vipExpiredTim = "2099-12-31 23:59:59";
$done({body : JSON.stringify(Q)});