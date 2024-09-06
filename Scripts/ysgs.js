/*
雅俗共赏
2024年9月6日 21:04:37
Author：Andy
https://apps-api.lianaishouce.cn/user/getUserInfo
*/

var Q = JSON.parse($response.body);
Q.data.isForeverVip = true;//会员
Q.data.memberExpireTime = "4102415999000";
Q.data.memberExpireTimeStr = "2099-12-31 23:59:59";
Q.data.nickname = "Andy";
Q.data.vipLevel = 4;
$done({body : JSON.stringify(Q)});